import express from 'express';
import userRouter from './routes/userRoute.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv';
dotenv.config();
const app = express();
//config
app.use(express.json());
//db connection 
connectDB();

// api end point 
app.use('/api/user' , userRouter);
const PORT = 4040;
app.listen(PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`);
})