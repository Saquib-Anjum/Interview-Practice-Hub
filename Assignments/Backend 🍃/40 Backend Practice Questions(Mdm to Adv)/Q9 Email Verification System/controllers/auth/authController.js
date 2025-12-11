//import model
import userModel from '../../model/userModel.js'
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import transporter from '../../utils/transporter.js';
import jwt from 'jsonwebtoken'
//login
const jwtToken=async(id)=>{
   return jwt.sign(
       id,
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );
}
const login= async(req  , res)=>{
    const {email,password} = req.body;
    const user =  await userModel.findOne({email})
    if(!email){
        return res.json({
            success:false,
            message:"User not Found"
        })
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.json({
            success:false,
            message:"Invalid credentials"
        })
    }
    const token = jwtToken(user._id);
    res.json({
        success:true,
        message:"successfully logged in",
        token
    })
}
//register
const register = async(req , res)=>{
    try{
    const {name , email , password} = req.body;
    
    const hashSalt = 10
    const encryptedPassword = await bcrypt.hash(password,hashSalt)
    const verifyToken = crypto.randomBytes(32).toString("hex");
    const verifyTokenExpire = Date.now() + 24 * 60 * 60 * 1000;
    
    const verificationLink = `http://localhost:3000/api/auth/verify-email/${verifyToken}`;
    const user={
        name,
        email,
        password:encryptedPassword,
        isVerified: false,
        verifyToken,      // Save token to DB
        verifyTokenExpire, // Save expiry to DB
       
    }
    const data  = new userModel(user);
    await data.save()
    //const verificationLink = `http://localhost:3000/api/auth/verify-email/${verifyToken}`;
    await transporter.sendMail({
        from: process.env.APP_EMAIL,
        to: email,
        subject: 'Account Verification',
        html: `<div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f6f9fc; color: #333;">
    <div style="max-width: 520px; margin: auto; background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.08);">

      <h2 style="text-align: center; color: #3b82f6; font-weight: 700;">
        🔐 Verify Your Email
      </h2>

      <p style="font-size: 15px; line-height: 1.6;">
        Hi <b>${name}</b>, <br><br>
        Thank you for registering! Please verify your email address so you can start using your account.
      </p>

      <div style="text-align: center; margin: 30px 0;">
        <a href="${verificationLink}"
          style="
            background: #3b82f6;
            padding: 12px 22px;
            border-radius: 8px;
            color: white;
            text-decoration: none;
            font-size: 16px;
            font-weight: bold;
            display: inline-block;
          "
        >
          Verify Email
        </a>
      </div>

      <p style="font-size: 14px; color: #555;">
        If the button doesn't work, click the link below:
      </p>

      <p style="word-break: break-all; color: #3b82f6;">
        ${verificationLink}
      </p>

      <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">

      <p style="font-size: 13px; color: #999; text-align: center;">
        This link will expire in 24 hours.  
        <br> If you didn’t sign up, you can safely ignore this email.
      </p>

      <p style="text-align: center; font-size: 14px; color: #3b82f6; margin-top: 20px;">
        — Your App Team 🚀
      </p>
    </div>
  </div>`
    });
    res.json({ success: true, 
        message: "Registered. Check email for verification token.",

    });

    }catch(err){
        res.json({
            success:false,
            message:err.message,
            err
        })
    }

    
}
// email verification 
const verifyEmail = async( req , res)=>{
    try {
        // CHANGE: Destructure from req.params, NOT req.body
        const { token } = req.params; 

        if (!token) {
            return res.json({ success: false, message: "Token Missing" });
        }

        const user = await userModel.findOne({
            verifyToken: token,
            verifyTokenExpire: { $gt: Date.now() }
        });

        if (!user) {
            return res.json({ success: false, message: "Invalid or expired token" });
        }

        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpire = undefined;
        await user.save();

        // Since this is a browser click, we can send a simple HTML success message
        res.send(`<div style="
    font-family: 'Segoe UI', Tahoma, sans-serif;
    text-align: center; 
    padding: 40px; 
    background: #eef3ff;
">
  
  <div style="
      max-width: 560px; 
      margin: auto; 
      background: white; 
      padding: 40px; 
      border-radius: 18px; 
      box-shadow: 0 6px 20px rgba(0,0,0,0.1);
      animation: fadeIn 0.8s ease-in-out;
  ">

      <!-- ANIMATED SUCCESS IMAGE -->
      <img 
        src="https://lottie.host/embed/3c49dedf-0b7e-4a73-8ce3-8fb42ef71811/21krlCxNQf.json"
        alt="Success Animation"
        style="width: 180px; margin-bottom: 20px;"
      />

      <h2 style="color: #22c55e; font-size: 30px; margin-bottom: 10px;">
        Email Verified Successfully! 🎉
      </h2>

      <p style="
        color: #555; 
        font-size: 17px; 
        line-height: 1.7; 
        margin-bottom: 30px;
      ">
        Your email has been verified with an animated celebration!  
        You can now continue to login and enjoy your account.
      </p>

      <!-- BUTTON -->
      <a href="http://localhost:3000/login" 
        style="
            display: inline-block;
            background: #3b82f6;
            color: white;
            padding: 14px 30px;
            border-radius: 10px;
            text-decoration: none;
            font-size: 17px;
            font-weight: bold;
            transition: 0.3s;
        "
        onmouseover="this.style.opacity='0.8'"
        onmouseout="this.style.opacity='1'"
      >
        Proceed to Login 🚀
      </a>

      <hr style="margin: 35px 0; border: none; border-top: 1px solid #eee;"/>

      <p style="color: #888; font-size: 14px;">
        Thank you for verifying.  
        If you didn’t request this, please ignore the message.
      </p>
  </div>
</div>

<style>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
`);

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}
export{login,register,verifyEmail }
