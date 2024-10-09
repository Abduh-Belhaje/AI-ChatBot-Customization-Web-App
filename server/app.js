// server.js
require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const passport = require('passport');
const connectDB = require('./config/db');
const app = express();
const authRoutes = require('./routes/authRoutes');


const port = 3000;

// Connect to the database
connectDB();

const swaggerOptions = require('./swagger.json');
const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Middlewares
app.use(express.json());
app.use(passport.initialize());

require('./config/passport');

// Set up the auth routes
app.use('/auth', authRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
