import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import sendEmail from '../utils/sendMail.js';
//signup controller
import userModel from '../models/userModel.js'


const tokenGenerater = (id) => {
  try {
    return jwt.sign({ id }, process.env.JWT_SECRET);
  } catch (err) {
    throw err;
  }
}
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const saltRounds = 10;
    const encryptedPassword = await bcrypt.hash(password, saltRounds);
    const userData = {
      name,
      email,
      password: encryptedPassword
    }

    const data = await new userModel(userData);
    await data.save();
    const token = tokenGenerater(data._id);
    res.json({
      success: true,
      message: "Successfully Registered",
      data,
      token
    })
  }
  catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message
    })
  }
}

//login controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      res.json({
        success: false,
        message: "User Not Found 😓"
      })
    }
    // 2. Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }
    const token = tokenGenerater(user._id);

    res.json({
      success: true,
      message: "Login successful",
      data: user,
      token,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }



}
const otp = async (req, res) => {
  const { email } = req.body;
  try {
    let user = await userModel.findOne({ email });
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = new Date(Date.now() + 5 * 60 * 1000);

    user.otp = otpCode;
    user.otpExpiry = expiry;
    await user.save();

    const message = `Your OTP is: ${otpCode}. It will expire in 5 minutes.`;

    await sendEmail(email, 'Your OTP Code', message);

    res.json({
      success: true,
      message: 'OTP sent to your email address 📩',
    });

  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message
    })
  }
}
const verifyOtp = async (req, res) => {
try{
  const user = await userModel.findOne({ email });

  if (!user || user.otp !== otp || user.otpExpiry < new Date()) {
    return res.status(401).json({ success: false, message: 'Invalid or expired OTP' });
  }

  // Clear OTP after verification
  user.otp = null;
  user.otpExpiry = null;
  await user.save();

  // Generate JWT token
  const token = tokenGenerater(user._id);

  res.json({
    success: true,
    message: 'OTP verified, login successful',
    token,
    user,
  });
}catch(err){
  console.log(err);
    res.json({
      success: false,
      message: err.message
    })
}
}
export { signup, login, otp, verifyOtp };