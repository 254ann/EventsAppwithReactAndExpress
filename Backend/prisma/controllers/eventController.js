const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

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
        organizerId: req.user.id
      }
    });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Error creating event' });
  }
};

const getEvents = async (req, res) => {
  const events = await prisma.event.findMany();
  res.json(events);
};

module.exports = {createEvent, getEvents}
