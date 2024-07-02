const express = require('express');
const { createEvent, getEvents } = require('../controllers/eventController');
const authenticateToken = require('../helpers/authenticateToken');

const router = express.Router();

router.post('/events', authenticateToken, createEvent);
router.get('/', getEvents);

module.exports = router;
