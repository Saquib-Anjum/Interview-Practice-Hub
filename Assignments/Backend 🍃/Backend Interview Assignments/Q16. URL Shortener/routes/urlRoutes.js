import express from 'express';
const urlRouter  = express.Router();
import {shortUrl , redirectUrl , getUrlAnalytics} from '../controllers/urlController.js'
//create short URL this is this for this 

urlRouter.post('/shorten',shortUrl);

// route for redirect long url
urlRouter.get('/:code',redirectUrl);

// route for het analytics of url 
urlRouter.get('/analytics/:code',getUrlAnalytics);

export default urlRouter;