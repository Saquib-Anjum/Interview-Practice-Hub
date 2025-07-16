import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/userRoute.js';
const app = express();
//api config
app.use(express.json());

//db connection

//api route
app.use('/user/api',userRouter);
const PORT = 3000;

//listening app
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT} || http://localhost:${PORT}`)
})

