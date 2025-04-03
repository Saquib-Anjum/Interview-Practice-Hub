import express from 'express'
import dotenv from 'dotenv'
import downloadRouter from './routes/downloadRoute.js';
dotenv.config();
const app = express();
//config
app.use(express.json())
//api-end point 
app.use('/api/user' , downloadRouter)
//listening app
const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})