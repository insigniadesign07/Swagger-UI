const express = require('express');
const { swaggerUi, specs } = require('./config/swagger');

const app = express();

// Swagger page setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Define your routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

module.exports = app;
    