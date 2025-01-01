const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Login = require('./models.js'); // Ensure this is the correct path and model name

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

// GET request to retrieve all login entries
app.get('/api/logins', async (req, res) => {
    try {
        const logins = await Login.find(); // Fetch all login documents
        return res.status(200).json(logins);
    } catch (err) {
        return res.status(500).send({ message: "Failed to retrieve logins" });
    }
});

// POST request
app.post('/api/login', async (req, res) => {
    try {
        const login = await Login.create(req.body);
        return res.status(201).send(login);
    } catch (err) {
        return res.status(400).send({ message: "Failed to create login" });
    }
});

// Connect to DB
mongoose.connect("mongodb+srv://Thanuja46:thanu826@backenddb.tijrt.mongodb.net/")
.then(() => {
    console.log('Connected to DB');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch((err) => {
    console.log('Connection Failed: ', err);
});