import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const auth =  async()=>{
    const { token } = req.headers;
    if(!token){
        return res.json({success:false,
         message :"Not Authorized Login Again"
     })

    }
    else{
        try{
         const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id
        next()
        }catch(err){
         console.log(err)
       res.json({
          success:false,
          message:err.message
         })
        }
    }
}
export default auth