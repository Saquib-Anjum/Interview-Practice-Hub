import express from 'express';
const app = express();

//listening app
const PORT = 3030
app.listen(PORT,()=>{
    console.log(`server is runing at http://localhost:${PORT}`)
})
