import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import urlRouter from './routes/urlRoutes.js';
const app =express();
//api config
dotenv.config();
app.use(express.json());
//connecting mongoDB 
mongoose.connect(process.env.DB_URL).then(()=>{console.log('DB CONNECTED ')}).catch((err)=>{
    console.log(err)
    });
//api end point
app.use('/api/url',urlRouter)

//here app will listen 
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(` server is rinning on : http://localhost:{PORT}`);
})