import mongoose from 'mongoose';
import userModel from '../models/userModel.js'
import dotenv from 'dotenv';
dotenv.config();

const dbConnection = async()=>{
mongoose.connection.on('connected',()=>{
    console.log("DB Connected")
})
await mongoose.connect(`${process.env.DB_URL}`)
}
export default dbConnection;