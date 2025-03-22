import express from 'express';
const userRouter = express.Router();
import { userRegister, userLogin } from '../controllers/userControllers.js';
import auth from '../middlewares/auth.js'
userRouter.post('/register',userRegister);

userRouter.post('/register', userLogin)
userRouter.post('/login',auth, userLogin)
export default userRouter;