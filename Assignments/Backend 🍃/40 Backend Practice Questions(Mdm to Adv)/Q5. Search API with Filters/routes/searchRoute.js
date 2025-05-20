import express from 'express';
import { productController } from '../Controllers/productController.js';
const searchRouter =  express.Router();

//alll routing 🩺 will be here 
searchRouter.post('/product',productController);

export default searchRouter;