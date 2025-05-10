import express from 'express';
 import {signup , login , otp ,verifyOtp} from '../controllers/userController.js'
 import auth from '../middlewares/auth.js'

const userRouter = express.Router();

// all routes 

userRouter.post('/signup',signup);
userRouter.post('/login', login);
userRouter.post('/otp',otp);
userRouter.post('/verify',verifyOtp)
export default userRouter;