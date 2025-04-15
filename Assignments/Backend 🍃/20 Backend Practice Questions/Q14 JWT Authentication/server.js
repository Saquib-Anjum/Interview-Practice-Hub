import express from 'express';
import userRouter from './routes/.js';
import dbConnection from './config/dbConnection.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
//config
dbConnection()
//api end point 
app.use('/api/user',userRouter)

//app listening here
const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`server is server running  : http://localhost:${PORT}`)
})