import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRoute.js'
import limiter from './middlewares/rateLimit.js'
const app = express();
app.use(cors());
app.use(express.json())
//applying rte limit 

app.use(limiter)
//api end point 
app.use('/api/user', userRouter);
// app is lisening on server 
const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`server is running : http://localhost:${PORT}`);
})