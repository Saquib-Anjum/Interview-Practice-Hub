import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js'
import userRouter from './routes/userRoutes.js'
const app = express();
app.use(express.json());
connectDB();
//api end points
app.use('/api/user',userRouter);
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`server is running on  port ${PORT} -> http://localhost:${PORT}`);
})