import express from 'express';
import {signup ,login ,verify} from '../controllers/userController.js'
const userRouter = express();

//  apiroutes
userRouter.post('/signup' , signup);
userRouter.post('/login',login);
userRouter.get('/verify', verify);
export default userRouter;