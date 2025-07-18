import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import userModel from '../model/userModel.js'
//user registration
const register = async (req, res) => {
    try{
        const { name, email, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);//10 is salt
    const userData = {
        name,
        email,
        password: encryptedPassword
    }
    // add dta to the data base ]
    const data = new userModel(userData);
    await data.save();
    res.json({
        success:true,
        message:"Registred SuccessFully 💖",
        Data:data
    })
    }catch(err){
        console.log("error->",err);
        res.json({
            success:false,
            message:err.message
        })
    }
}

//login user
const login = async (req, res) => {
      const {email , password} = req.body;
      const user = await userModel.findOne({email});
      if(!user){
        res.json({
            success:false,
            message:"User not found 🙇‍♀️",

        })
      }
      //compare possword
      const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch){
        res.json({
            success:false,
            message:"Wrong Credentials"
        })
      }
      res.json({
        success:true,
        message:"Logged successfully"
      })
}
//
//gmail verify
const verify = async (req, res) => {

}

export { login, register, verify }
