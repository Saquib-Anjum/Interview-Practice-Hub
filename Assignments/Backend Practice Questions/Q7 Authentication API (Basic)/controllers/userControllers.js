import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import express from 'express'
import {userModel} from '../models/userDB.js'
import jwt from 'jsonwebtoken';

//user Register

const createToken = (id) => {
    try {
        return jwt.sign({ id }, process.env.JWT_SECRET);
    } catch (err) {
        throw err;
    }
};

const userRegister = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const saltRounds = 10; 
        const encryptedPassword = await bcrypt.hash(password, saltRounds);
        const userData = {
            name,
            email,
            password: encryptedPassword,
            createdAt: Date.now()
        };

        const data = await new userModel(userData);
        await data.save();
        const token = createToken(data._id);
        res.json({
            success: true,
            message: "Registered Successfully",
            token:token,
            data,
           
        });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
};

//user Login
const userLogin= async (req,res)=>{

}
export {userRegister,userLogin};