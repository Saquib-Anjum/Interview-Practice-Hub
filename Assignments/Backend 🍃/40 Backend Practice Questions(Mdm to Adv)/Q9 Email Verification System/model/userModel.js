import mongoose, { Types } from 'mongoose';
const userSchema  = mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        requires:true,
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    verifyToken:{
      type:String,

    },
    verifyTokenExpire:{
        type:Date,
    }

})
const userModel = mongoose.model('user',userSchema);
export default userModel;