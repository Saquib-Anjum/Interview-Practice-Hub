import express from 'express';
import { createTODO, updateTODO, readTODO, deleteTODO } from '../controllers/todoControler.js'

const todoRouter = express.Router();

//creating all routes 

todoRouter.post('/create',createTODO);

todoRouter.get('/read' ,readTODO);

todoRouter.put('/update',updateTODO);

todoRouter.delete('/delete',deleteTODO);

export default todoRouter