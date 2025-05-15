import mongoose from 'mongoose';
const connectDB = async()=>{
    
// Connect to MongoDB
try{
    await mongoose.connect(`mongodb://127.0.0.1:27017/InterviewAssignmentAuth`)
    console.log("DB Connected 🤖")

}catch(err){
    console.log(err);

}
}
export default connectDB;