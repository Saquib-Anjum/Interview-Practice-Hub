//here we identify about versioning how to do that
import express from 'express'

const router = express.Router();

// Version 1 of the API
router.get('/v1/resource', (req, res) => {
    res.send('Response from API version 1');
});

// Version 2 of the API
router.get('/v2/resource', (req, res) => {
    res.send('Response from API version 2');
});