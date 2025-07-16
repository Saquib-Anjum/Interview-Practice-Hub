import express from 'express';
import {login , register ,  verify} from '../controllers/userController.js'
const userRouter = express.Router();

//api routes
userRouter.post('/register',register);
userRouter.post('/login', login);
userRouter.post('/verify',verify);
export default userRouter