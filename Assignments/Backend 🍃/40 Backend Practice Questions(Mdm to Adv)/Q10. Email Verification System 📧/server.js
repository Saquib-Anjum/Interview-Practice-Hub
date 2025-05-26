import express from 'express';
import userRouter from './routes/userRoute.js'
import connectDB from './config/connectDB.js';
const app = express();
//config
app.use(express.json());
connectDB();
//api end point 
app.use('/api/user',userRouter);
//listening the app
const PORT  = 3000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}  , http://localhost:${PORT}`)
}) 