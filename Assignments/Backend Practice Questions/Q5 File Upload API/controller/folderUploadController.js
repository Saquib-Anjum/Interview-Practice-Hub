import express from 'express';
import multer from 'multer';
import fs from 'fs';

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads/')) {
    fs.mkdirSync('uploads/');
}

const storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, 'uploads/'); 
    }, 
    filename: (req, file, cb) => { 
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); 
        cb(null, uniqueSuffix + '-' + file.originalname); 
    } 
}); 

const upload = multer({ storage: storage });

const folderUpload = async(req, res) => {
    try {
        const {name, email, password} = req.body;
        const uploadedFile = req.file; // Access file information from req.file
        
        console.log('Form data:', name, email, password);
        console.log('File information:', uploadedFile);
        
        res.status(200).json({
            message: "File uploaded successfully",
            fileInfo: uploadedFile
        });
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
            message: "Error uploading file",
            error: err.message
        });
    }
}

export {folderUpload, upload}; 