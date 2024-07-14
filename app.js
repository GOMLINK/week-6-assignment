const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));  // Serve static files

// Routes

// Landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Register page
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

// Login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Add expense page
app.get('/add_expense', (req, res) => {
    res.sendFile(path.join(__dirname, 'add_expense.html'));
});

// Edit expense page
app.get('/edit_expense', (req, res) => {
    res.sendFile(path.join(__dirname, 'edit_expense.html'));
});

// View expenses page
app.get('/view_expense', (req, res) => {
    res.sendFile(path.join(__dirname, 'view_expense.html'));
});

// API endpoints for handling data (these would typically interact with a database)

// Register user
app.post('/api/register', (req, res) => {
    // Logic to register a new user
    res.send('User registered');
});

// Login user
app.post('/api/login', (req, res) => {
    // Logic to authenticate a user
    res.send('User logged in');
});

// Add new expense
app.post('/api/expenses', (req, res) => {
    // Logic to add a new expense
    res.send('Expense added');
});

// Edit existing expense
app.put('/api/expenses/:id', (req, res) => {
    // Logic to edit an existing expense
    res.send('Expense updated');
});

// View all expenses
app.get('/api/expenses', (req, res) => {
    // Logic to retrieve all expenses
    res.send('List of all expenses');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
console.log(path.join(__dirname, 'index.html'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
