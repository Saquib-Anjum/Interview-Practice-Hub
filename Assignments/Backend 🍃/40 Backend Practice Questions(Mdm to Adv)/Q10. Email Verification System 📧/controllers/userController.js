import mongoose from 'mongoose';
import userModel from '../models/userModel.js';
import sendVerificationEmail from '../utils/sendEmail.js';
import bcrypt from 'bcrypt'
import { ErrorReply } from 'redis';
import jwt from 'jsonwebtoken'
//signup
const signup = async (req, res) => {
    try{
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
    }catch(err){
        console.log(err);
        res.json({
            success:false,
            message:ErrorReply.message
        })
    }
}
//login
const login = async (req, res) => {
   try{

   }catch(err){
    console.log(err);
    res.json({
        success:false,
        message:err.message
    })
   }
}

// verification of email

const verify = async (req, res) => {
    const { token } = req.query;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        await userModel.updateOne({ email: decoded.email }, { isVerified: true });
        res.send('Email verified successfully!');
    } catch (err) {
        res.status(400).send('Invalid or expired token.');
    }
}
export { signup, login, verify };