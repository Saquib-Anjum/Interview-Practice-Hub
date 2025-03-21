import express from 'express';
import mongoose from 'mongoose';
import 'dotenv'
import userRouter from './routes/userRoute.js'
const app=express();

app.express.json();
//api end point 
app.use('/api/user',userRouter)
//listening app
const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`)
})
