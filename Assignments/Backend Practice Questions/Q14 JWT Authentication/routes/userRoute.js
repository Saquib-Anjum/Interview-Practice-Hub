import mongoose from 'mongoose';
import express from 'express';
import {register,login} from '../controllers/userControllers.js'
import auth from '../middlewares/auth.js'
const userRouter = express.Router();
userRouter.post('/register',register)

userRouter.post('/login',auth,login)