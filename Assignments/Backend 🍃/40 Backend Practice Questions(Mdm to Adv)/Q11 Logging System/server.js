import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/userRoute.js';
import dbConnect from './config/connectDB.js';
const app = express();
//api config
app.use(express.json());
//db connection
dbConnect();
//api route
app.use('/api/user',userRouter);
const PORT = 3000;

//listening app
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT} || http://localhost:${PORT}`)
})

