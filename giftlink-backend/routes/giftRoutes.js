const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');
router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');
        const gifts = await collection.find({}).toArray();
        res.json(gifts);
    } catch (e) { res.status(500).send('Error'); }
});
router.get('/:id', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');
        const gift = await collection.findOne({ id: req.params.id });
        if (!gift) return res.status(404).send('Not found');
        res.json(gift);
    } catch (e) { res.status(500).send('Error'); }
});
module.exports = router;
