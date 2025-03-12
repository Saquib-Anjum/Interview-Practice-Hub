import express from 'express';
import userController from '../controllers/userControllers.js'
const userRouter = express.Router();

userRouter.post('/register', userController);

export default userRouter;