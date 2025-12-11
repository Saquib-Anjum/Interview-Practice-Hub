import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/connectDB.js'
import authRouter from './routes/auth/authRoute.js';
const app = express();
//configs
connectDB();
app.use(express.json());
//api endpoint
app.use('/api/auth' ,authRouter);
//port to listen
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT} | http:localhost:${PORT}`)
})
