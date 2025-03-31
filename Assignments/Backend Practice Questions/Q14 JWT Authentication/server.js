import express from 'express';
const app = express();
//api end point 


//app listening here
const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`server is server running  : http://localhost:${PORT}`)
})