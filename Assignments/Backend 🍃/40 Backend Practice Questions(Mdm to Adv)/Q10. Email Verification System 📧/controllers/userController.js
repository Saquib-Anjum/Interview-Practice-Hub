import mongoose from 'mongoose';
import userModel from '../models/userModel.js';
import sendVerificationEmail from '../utils/sendEmail.js';
import bcrypt from 'bcrypt'
import { ErrorReply } from 'redis';
import jwt from 'jsonwebtoken'
//signup
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const userData = {
      name,
      email,
      password: encryptedPassword
    }
    const data = new userModel(userData);
    await data.save();
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    await sendVerificationEmail(email, token);
    res.json({
      success: true,
      data,
      token
    })
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: ErrorReply.message
    })
  }
}
//login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    if (!user.isVerified) {
      return res.status(401).json({ success: false, message: 'Please verify your email first' });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({
      success: true,
      message: 'Login successful',
      token,
      data: user
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

// verification of email

const verify = async (req, res) => {
  const { token } = req.query;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await userModel.updateOne({ email: decoded.email }, { isVerified: true });
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Email Verified</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', sans-serif;
      background-image: url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1050&q=80');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      text-align: center;
      color: #ffffff;
    }
    .container {
      background-color: rgba(0, 0, 0, 0.7);
      padding: 50px 20px;
      max-width: 600px;
      margin: 80px auto;
      border-radius: 12px;
    }
    h1 {
      font-size: 36px;
      color: #4caf50;
    }
    p {
      font-size: 20px;
      margin-top: 15px;
    }
    .button {
      background-color: #4caf50;
      color: white;
      padding: 14px 28px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      text-decoration: none;
      margin-top: 30px;
      display: inline-block;
    }
    .button:hover {
      background-color: #45a049;
    }
    .urdu {
      font-size: 18px;
      margin-top: 20px;
      font-family: 'Noto Nastaliq Urdu', serif;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✅ Email Verified!</h1>
    <p>Your email has been successfully verified.</p>
    <p class="urdu">آپ کا ای میل کامیابی سے تصدیق ہو گیا ہے۔</p>
    <a class="button" href="http://localhost:3000/login">Go to Login</a>
  </div>
</body>
</html>

            `);
  } catch (err) {
    res.status(400).send('Invalid or expired token.');
  }
}
export { signup, login, verify };