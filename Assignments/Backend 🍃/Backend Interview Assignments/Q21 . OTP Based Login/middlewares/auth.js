import express from 'express';
import jwt from 'jsonwebtoken'
const auth = async( req , res ,  next)=>{
   try{
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    res.user = decoded;
    next();
   }catch(err){
    console.log(err);
    res.json({
        success:false,
        message:"Invalid Token 🚫"
    })
   } 
}
export default auth