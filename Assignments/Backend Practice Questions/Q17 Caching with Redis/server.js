import express from 'express';
const app = express();

//listening app

const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`server is running at :http://localhost::${PORT}`)
})