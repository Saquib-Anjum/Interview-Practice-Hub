import express from 'express';
//import multer from 'multer';
import folderRouter from './routes/folderUploadRoute.js';
const app = express();
//api end point
app.use('/api/user' , folderRouter);
//listening app
const PORT  = 4000;
app.listen(PORT , ()=>{
    console.log(`server is running http://localhost:${PORT}`)
})