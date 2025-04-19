import mongoose from 'mongoose';

const urlScheam = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    urlCode: {
        type: String,
        required: true,
        unique: true
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const urlModel = mongoose.model('url',urlScheam);

export default urlModel;