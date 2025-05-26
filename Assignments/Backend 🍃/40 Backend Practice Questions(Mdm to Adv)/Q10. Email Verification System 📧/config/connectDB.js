import mongoose from 'mongoose';

const connectDB = async( req , res )=>{
    try{
        await mongoose.connect(`mongodb://127.0.0.1:27017/email_verification `)
        console.log("DB Connected 👛")
    
    }catch(err){
        console.log(err);
    
    }
}
export default connectDB;