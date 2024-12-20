const express = require('express');
const Booking = require('../models/Booking');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Create a booking with conflict validation
router.post('/', authMiddleware, async (req, res) => {
    const { property, startDate, endDate } = req.body;

    try {
        const existingBooking = await Booking.findOne({
            property,
            $or: [
                { startDate: { $lte: endDate, $gte: startDate } },
                { endDate: { $gte: startDate, $lte: endDate } },
            ],
        });

        if (existingBooking) return res.status(400).json({ message: 'Property is already booked for these dates' });

        const booking = new Booking({
            property,
            user: req.user.id,
            startDate,
            endDate,
        });
        await booking.save();
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
