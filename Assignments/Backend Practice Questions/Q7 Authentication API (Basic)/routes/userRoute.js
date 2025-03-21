import express from 'express';
const userRouter = express.Router();
import { userRegister, userLogin } from '../controllers/userControllers.js';
userRouter.post('/register')