import express from 'express';
const searchRouter = express.Router();
import {searchProduct,filterProduct} from '../controllers/searchController.js'
searchRouter.get('/getProduct',searchProduct);
searchRouter.get('/filter' ,filterProduct)
export default searchRouter;