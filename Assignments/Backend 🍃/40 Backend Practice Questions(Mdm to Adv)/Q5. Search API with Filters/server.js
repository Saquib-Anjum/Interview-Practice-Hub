import express from 'express';
import searchRouter from './routes/searchRoute.js';
const app = express();
//app config
app.use(express.json())
//api end point
app.get('/',(req , res)=>{
res.send("Hello world")
})
app.use('/api/user',searchRouter);
//listening app
const PORT  = 3000;

app.listen(PORT,()=>{
    console.log(` server is running on : http://localhost:${PORT}`);
})