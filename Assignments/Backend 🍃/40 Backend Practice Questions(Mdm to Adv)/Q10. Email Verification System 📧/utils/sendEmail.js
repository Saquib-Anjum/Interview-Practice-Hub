import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
dotenv.config();
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendVerificationEmail = async (to, token) => {
  const url = `http://localhost:3000/api/user/verify?token=${token}`;
  await transporter.sendMail({
    from: `"Verify Email" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Email Verification",
    html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', sans-serif;
      background-color: #000; /* fallback */
      text-align: center;
      color: #ffffff;
    }
    .container {
      background-color: rgba(0, 0, 0, 0.8);
      padding: 40px 20px;
      max-width: 600px;
      margin: 0 auto;
      border-radius: 10px;
    }
    .button {
      background-color: #28a745;
      color: white;
      padding: 15px 30px;
      border: none;
      text-decoration: none;
      font-size: 16px;
      border-radius: 5px;
      display: inline-block;
      margin-top: 20px;
    }
    .button:hover {
      background-color: #218838;
    }
    .urdu {
      font-size: 18px;
      margin-top: 20px;
      font-family: 'Noto Nastaliq Urdu', serif;
    }
    img.header-img {
      max-width: 100%;
      border-radius: 10px 10px 0 0;
    }
  </style>
</head>
<body>
  <img class="header-img" src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1050&q=80" alt="Header Image" />
  <div class="container">
    <h1>Verify Your Email</h1>
    <p>Please click the button below to verify your email address:</p>
    <a href="{{url}}" class="button">Verify Email</a>
    <p class="urdu">براہ کرم اپنے ای میل کی تصدیق کے لیے اوپر والے بٹن پر کلک کریں۔</p>
  </div>
</body>
</html>
`,
  });
};

export default sendVerificationEmail;
