import express from 'express';
import userRouter from './routes/routes.js'

const app = express();
app.use(express.json())

//api end point
app.use('/api/user',userRouter)
//listening app
const PORT = 4000;
app.listen(PORT , ()=>{
    console.log(`server is running  : http://localhost:${PORT}`);
})