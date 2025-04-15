import express from 'express';
import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt';
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken';
const createjwt = (id)=>{
    try{
       return jwt.sign({id},process.env.JWT_SECRET);
    }catch(err){
throw err
    }
}
const register =async()=>{
try{
const {name,email,password } = req.body;

const salt = 20;

const hassedPassword = await bcrypt.hash(password ,salt)
const userData = {
    name:name,
    email:email,
    password:hassedPassword
}

const data = new userModel(userData);
data.save()
const token = createjwt(data._id);
res.json({
    success:true,
    message:"You are Successfully registered",
    token:token,
    data
})


}catch(err){
console.log(err);
res.json({
    success:false,
    message:err.message,

})
}
}

const login = async (req,res)=>{
try{
const {email,password}= req.body();
const user = userModel.findOne({email});
if (!user){
res.json({
    success:false,
    message:"User Not Found"
})
}
const isMatched = await bcrypt.compare(password,user.password);
if(isMatched){
    const token =createjwt(user._id);
    res.json({
        success:true,
        message:"Login successully",
        token
    })
}
else{
    res.json({
        success:false,
        message:"Invalid credintial",

    })
}

}catch(err){
    console.log(err);
    res.json({
        success:true,
        message:err.message
    })
}
}

export {register,login};