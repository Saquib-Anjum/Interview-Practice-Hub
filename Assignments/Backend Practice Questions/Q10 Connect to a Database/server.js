import express from 'express';
import mongoose from 'mongoose';
import dbConnection from './config/dbConmection.js';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
//config
app.use(dbConnection);

//api end point

app.use(express.json())
const PORT  = 4000;
app.listen(PORT,()=>{
    console.log(` server is running on http://localhost:${PORT}`)
})