import mongoose from 'mongoose';

const dbConnect= async()=>{
try{

 // ✅ Correct connection string
await mongoose.connect(`mongodb://127.0.0.1:27017/logging_system?authSource=admin&w=1`);

 console.log("DB Connected 🟢")
}catch(err){
console.log("error  ->",err);
}
}
export default dbConnect;