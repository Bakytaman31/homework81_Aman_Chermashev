const express = require('express');
const nanoid = require('nanoid');

const Url = require('../models/Url');

const router = express.Router();

router.post('/', async (req, res) => {
    const urlData = {
        originalUrl: req.body.originalUrl,
        shortUrl: nanoid(7)
    };
    const url = new Url(urlData);
    try {
        await url.save();
        return res.send(url.shortUrl);
    } catch (e) {
        return res.status(400).send(e);
    }
});

router.get('/:shortUrl', async (req, res) => {
    try {
        const url = await Url.findOne({shortUrl: req.params.shortUrl});

        if (!url) {
            return res.status(404).send({message: 'Not found'});
        }

        res.status(301).redirect(url.originalUrl);
    } catch (e) {
        res.status(404).send({message: 'Not found'});
    }
});

module.exports = router;