import express from 'express';
import fs from 'fs'
const userController =(req,res)=>{
try{
    const {name,email,password} = req.body;
    console.log( "name" ,name)
    console.log( "password" ,password)
    console.log( "email" ,email)
    const textToAdd = `
    name :${name},
    eamil : ${email},
    password : ${password},
    
    ------------------`;
    fs.appendFileSync('user_logs.txt',textToAdd);
    res.json({
        success:true,
        message:"We found user Details",
        name,email,password
    })

}catch(err){
    console.log(err);
    res.json({
        success:false,
        message:"do check"
    })

}
}
export default userController