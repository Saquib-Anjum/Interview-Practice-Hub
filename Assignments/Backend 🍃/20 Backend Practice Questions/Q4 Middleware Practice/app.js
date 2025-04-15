import express from 'express';
import fs from 'fs';
const app = express();
const PORT = 4000;
const reqData = async(req,res,next)=>{
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
   
     // Pass control to the next middleware or route handler
     const data = `
     ${timestamp} , ${req.method} ${req.url}
     --------------------------------------
     `
     fs.appendFileSync('DataFile.txt', data)

     next();
}
app.use(reqData);
app.post('/', (req, res) => {
    res.send("Hello World");
});
app.listen(PORT,()=>{
    console.log(`server is running : http://localhost:${PORT}`)
})