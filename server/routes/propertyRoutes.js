const express = require('express');
const Property = require('../models/Property');
const authMiddleware = require('../middleware/authMiddleware');
const multer = require('multer');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

// Get all properties with pagination
router.get('/', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    try {
        const properties = await Property.find()
            .skip((page - 1) * limit)
            .limit(parseInt(limit));
        const total = await Property.countDocuments();

        res.status(200).json({
            properties,
            currentPage: parseInt(page),
            totalPages: Math.ceil(total / limit),
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create property
router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
    const { title, description, price, location } = req.body;
    const image = req.file.path;

    try {
        const property = new Property({
            title,
            description,
            price,
            location,
            image,
            owner: req.user.id,
        });
        await property.save();
        res.status(201).json(property);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
