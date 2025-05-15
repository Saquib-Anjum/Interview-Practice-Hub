import express from 'express';
const userRouter = express.Router();
import {signup , login } from '../controller/userController.js'
//all routes here
userRouter.post('/signup',signup)
userRouter.post('/login',login);
export default userRouter;