import express from 'express';
import mongoose from 'mongoose';
import dbConnection from './config/dbConmection.js';
import userRouter from './routes/userRoute.js';
const app = express();
app.use(express.json())
import dotenv from 'dotenv';
dotenv.config();
//config
dbConnection();

//api end point
app.use('/api/user',userRouter)
app.use(express.json())
const PORT  = 4000;
app.listen(PORT,()=>{
    console.log(` server is running on http://localhost:${PORT}`)
})