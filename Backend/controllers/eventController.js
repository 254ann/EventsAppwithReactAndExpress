const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Create event
const createEvent = async (req, res) => {
  const { title, description, date, location, imageUrl } = req.body;
  try {
    const event = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        location,
        imageUrl,
        organizerId: req.user.userId
      }
    });
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: 'Error creating event' });
  }
};

// Get events
const getEvents = async (req, res) => {
  const events = await prisma.event.findMany();
  res.json(events);
};

module.exports = { createEvent, getEvents };
