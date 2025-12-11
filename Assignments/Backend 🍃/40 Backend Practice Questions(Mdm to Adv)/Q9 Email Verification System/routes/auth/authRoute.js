import express from 'express';
const authRouter = express.Router();
import {login , register , verifyEmail}  from'../../controllers/auth/authController.js'
authRouter.post('/login',login);
authRouter.post('/register' , register);
authRouter.get('/verify-email/:token', verifyEmail);



export default authRouter;