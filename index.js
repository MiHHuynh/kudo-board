const express = require('express');
const cors = require('cors');
const app = express();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Root route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// CRUD Routes for Board and Card

// Get all boards
app.get('/boards', async (req, res) => {
    try {
        const boards = await prisma.board.findMany({
            include: {
                cards: true,
            },
        });
        res.json(boards);
    } catch (error) {
        console.error('Error fetching boards:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Get a single board by ID
app.get('/boards/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const board = await prisma.board.findUnique({
            where: { id: parseInt(id) },
            include: {
                cards: true,
            },
        });
        res.json(board);
    } catch (error) {
        console.error('Error fetching board:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Create a new board
app.post('/boards', async (req, res) => {
    const { title, category } = req.body;
    try {
        const newBoard = await prisma.board.create({
            data: { title, category },
        });
        res.json(newBoard);
    } catch (error) {
        console.error('Error creating board:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Update a board by ID
app.put('/boards/:id', async (req, res) => {
    const { id } = req.params;
    const { title, category } = req.body;
    try {
        const updatedBoard = await prisma.board.update({
            where: { id: parseInt(id) },
            data: { title, category },
        });
        res.json(updatedBoard);
    } catch (error) {
        console.error('Error updating board:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Delete a board by ID
app.delete('/boards/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.board.delete({
            where: { id: parseInt(id) },
        });
        res.sendStatus(204); // No Content
    } catch (error) {
        console.error('Error deleting board:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Get all cards
app.get('/cards', async (req, res) => {
    try {
        const cards = await prisma.card.findMany();
        res.json(cards);
    } catch (error) {
        console.error('Error fetching cards:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Get a single card by ID
app.get('/cards/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const card = await prisma.card.findUnique({
            where: { id: parseInt(id) },
        });
        res.json(card);
    } catch (error) {
        console.error('Error fetching card:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Create a new card
app.post('/cards', async (req, res) => {
    const { message, gif, boardId } = req.body;
    try {
        const newCard = await prisma.card.create({
            data: { message, gif, boardId },
        });
        res.json(newCard);
    } catch (error) {
        console.error('Error creating card:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Update a card by ID
app.put('/cards/:id', async (req, res) => {
    const { id } = req.params;
    const { message, gif, boardId } = req.body;
    try {
        const updatedCard = await prisma.card.update({
            where: { id: parseInt(id) },
            data: { message, gif, boardId },
        });
        res.json(updatedCard);
    } catch (error) {
        console.error('Error updating card:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Delete a card by ID
app.delete('/cards/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.card.delete({
            where: { id: parseInt(id) },
        });
        res.sendStatus(204); // No Content
    } catch (error) {
        console.error('Error deleting card:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
