import mongoose from 'mongoose';

const connectDB = async()=>{
    try {
        mongoose.connection.on("connected", () => {
          console.log(" 💖 DB Connected");
        });
        await mongoose.connect(`${process.env.MONGO_URI}`);
      } catch (err) {
        console.error(" Initial connection error:", err);
      }
}
export default connectDB;