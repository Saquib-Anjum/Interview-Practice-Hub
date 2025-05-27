import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        requires:true
    },
    email:{
        type:String,
        requires:true
    },
    password:{
        type:String,
        required:true
    },
    isVerified: { 
        type: Boolean, 
        default: false 
    },
})
const userModel = mongoose.model('user',userSchema);
export default userModel;