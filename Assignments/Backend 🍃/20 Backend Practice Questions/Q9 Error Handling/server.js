
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/api/users/:id', (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        
        // Simulate a user not found scenario
        if (id <= 0) {
            const error = new Error('User not found');
            error.status = 404;
            throw error;
        }

        // Simulate a server error scenario
        if (id === 999) {
            throw new Error('Internal server error');
        }

        res.json({ id, name: 'Sample User' });
    } catch (error) {
        next(error);
    }
});

// Sample POST route to demonstrate bad request handling
app.post('/api/users', (req, res, next) => {
    try {
        const { name, email } = req.body;

        // Check for required fields
        if (!name || !email) {
            const error = new Error('Name and email are required');
            error.status = 400;
            throw error;
        }

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        next(error);
    }
});

// 404 handler for invalid routes
app.use((req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    next(error);
});

// Global error handler
app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = status === 500 ? 'Internal server error' : error.message;
    
    res.status(status).json({
        error: {
            message,
            status
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
