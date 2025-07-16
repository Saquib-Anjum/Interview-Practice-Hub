import express from 'express';
const app = express();
const PORT = 3000;

//listening app
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT} || http://localhost:${PORT}`)
})

