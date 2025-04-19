import urlModel from '../Model/urlModel.js'
import shortid from 'shortid';
import validUrl from 'valid-url';
const shortUrl = async(req , res)=>{
    const { longUrl } = req.body;
    
    // Check if URL is valid
    if (!validUrl.isUri(longUrl)) {
        return res.status(400).json({ error: 'Invalid URL. Please enter a valid URL for shortening.' });
    }
    
    try {
        // Check if URL already exists in database
        let url = await urlModel.findOne({ longUrl });
        
        if (url) {
            return res.json(url);
        }
        
        // Create URL code
        const urlCode = shortid.generate();
        console.log("URL CODE ->",urlCode)
        // const host =  longUrl.split('/')[2];
        const shortUrl = `${req.protocol}://${req.get('host')}/${urlCode}`;
        console.log("Short Url ",shortUrl)
        // Create new URL entry
        url = new urlModel({
            longUrl,
            shortUrl,
            urlCode,
            date: new Date()
        });
        
        await url.save();
        
        res.json(url);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

const redirectUrl = async(req , res)=>{
    try {
        const url = await urlModel.findOne({ urlCode: req.params.code });
        
        if (!url) {
            return res.status(404).json({ error: 'URL not found' });
        }
        
        // Increment click count
        url.clicks++;
        await url.save();
        
        return res.redirect(url.longUrl);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    } 
}

const getUrlAnalytics = async(req , res)=>{
    try {
        const url = await urlModel.findOne({ urlCode: req.params.code });
        
        if (!url) {
            return res.status(404).json({ error: 'URL not found' });
        }
        
        res.json({
            longUrl: url.longUrl,
            shortUrl: url.shortUrl,
            clicks: url.clicks,
            createdAt: url.date
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

export {shortUrl , redirectUrl , getUrlAnalytics}