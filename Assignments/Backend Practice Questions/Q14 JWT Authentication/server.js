import express from 'express';
import userRouter from './routes/.js'
import dontenv from 'dotenv';
dontenv.config();
const app = express();
app.use(express.json());

//api end point 
app.use('/api/user',userRouter)

//app listening here
const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`server is server running  : http://localhost:${PORT}`)
})