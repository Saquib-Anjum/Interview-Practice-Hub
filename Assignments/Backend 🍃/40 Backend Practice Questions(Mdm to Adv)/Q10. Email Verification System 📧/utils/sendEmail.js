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
    html: `Click <a href="${url}">here</a> to verify your email.`,
  });
};

export default sendVerificationEmail;
