
import nodemailer from 'nodemailer';
import dotenv from'dotenv';
dotenv.config();
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.APP_EMAIL, // Your actual Gmail address
        pass: process.env.APP_KEY    // The 16-letter App Password you generated
    }
});
export default transporter