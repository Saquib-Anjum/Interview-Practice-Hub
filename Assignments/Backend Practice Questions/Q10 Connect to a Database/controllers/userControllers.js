import mongoose from 'mongoose';
import express from 'express';
import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'
const register = async (req,res)=>{
try{
    const { name, email, password } = req.body;
const saltRounds = 10; 
const encryptedPassword = await bcrypt.hash(password, saltRounds);
const userData = {
    name,
    email,
    password: encryptedPassword
}
const data = new userModel(userData)
await data.save();
res.json({
    success:true,
    message:"Registred SucessFully",
    data
})
}catch(err){
    console.log(err);
    res.json({
        success:false,
        message:err.message
    })
}
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find user by email
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // Return response without password
        const userResponse = user.toObject();
        delete userResponse.password;

        res.status(200).json({
            success: true,
            message: "Logged in successfully",
            data: userResponse
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}
export {register,login}