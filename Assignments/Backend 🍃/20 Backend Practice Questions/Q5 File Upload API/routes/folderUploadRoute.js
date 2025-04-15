import express from 'express';
import {folderUpload, upload} from '../controller/folderUploadController.js'; 
const folderRouter = express.Router();

folderRouter.post('/upload', upload.single('img'), folderUpload);

export default folderRouter;