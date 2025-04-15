import express from 'express';
import mongoose from 'mongoose';
import 'dotenv'
import userRouter from './routes/userRoute.js'
import dotenv from 'dotenv';
dotenv.config();
const app=express();

app.use(express.json());
//api end point 
//DB connection 

const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL).then(()=>{console.log('DB CONNECTED ')}).catch((err)=>{
    console.log(err)
    });
app.use('/api/user',userRouter)
//listening app
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`)
})
