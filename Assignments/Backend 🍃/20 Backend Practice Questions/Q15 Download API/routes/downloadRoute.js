import express from 'express';
import {download} from '../controllers/downloadController.js'
const downloadRouter = express.Router();
downloadRouter.post('/download' ,download);
export default downloadRouter;