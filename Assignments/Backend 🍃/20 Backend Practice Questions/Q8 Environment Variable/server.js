import express from 'express';
import dontenv from 'dotenv';
dontenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

//api endpoint
app.get('/',(req,res,next)=>{
    res.send(`PORT : ${process.env.PORT} message : ${process.env.SECRET_MESSAGE}`)
})
app.listen(PORT ,()=>{
    console.log(`server is running on : http://localhost:${PORT}`);
})
