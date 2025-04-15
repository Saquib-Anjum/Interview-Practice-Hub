import express from 'express';
import userRouter from './routes/bookRoutes.js'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

//api config
app.use('/api/user',userRouter)

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`);
})