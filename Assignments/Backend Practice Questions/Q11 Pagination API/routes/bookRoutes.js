import express from 'express';
const bookRouter = express.Router();
import {getPaginatedBooks} from '../controllers/booksControllers.js'
bookRouter.get('/books' , getPaginatedBooks);

export default bookRouter ;