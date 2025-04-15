import express from 'express';
import todoRouter from './routes/todoRoutes.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'

import dotenv from 'dotenv';
dotenv.config();
const DB_URL = process.env.DB_URL;
const app = express();
app.use(express.json());
//connecting DB
mongoose.connect(DB_URL).then(()=>{console.log('DB CONNECTED ')}).catch((err)=>{
    console.log(err)
    });
//api end point
app.use('/api/todo' , todoRouter);
//Listening API
const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`);
})