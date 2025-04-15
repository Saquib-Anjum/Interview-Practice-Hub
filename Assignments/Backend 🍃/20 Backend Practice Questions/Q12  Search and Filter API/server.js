import express from 'express'
import searchRouter from './routes/searchRoute.js'
const app = express()
app.use(express.json());

//api end point
app.use('/api/product',searchRouter)
//listening app
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`server in running : http://localhost:${PORT}`)
})