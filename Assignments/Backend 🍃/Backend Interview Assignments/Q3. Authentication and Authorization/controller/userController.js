import jwt from 'jsonwebtoken';
//import joi from 'joi';
import userModel from '../model/userModel.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const encrypteddPassword = await bcrypt.hash(password, 20);
        const userData = {
            name,
            email,
            password: encrypteddPassword

        }
        const data = await new userModel(userData);
        data.save();
        res.json({
            success: true,
            message: "User Registred",
            data
        })
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: err.message
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            res.json({
                success: false,
                message:"User Not found"
            })
        }
        res.json({
            success: true,
            message: "Login successful",
            data: user,
            token,
          });

    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: err.message
        })
    }
}
export { signup, login };