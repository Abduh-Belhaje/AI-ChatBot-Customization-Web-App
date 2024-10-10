require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const passport = require("passport");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();
const port = process.env.PORT || 3000; // Use port from environment variables

// Connect to the database
connectDB();

// Swagger configuration
const swaggerOptions = require("./swagger.json");
const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(passport.initialize()); // Initialize passport for authentication
app.use(
  cors({
    origin: "http://localhost:4000", // Allow requests from frontend
    methods: "GET,POST,PUT,DELETE", // Specify allowed HTTP methods
    credentials: true, // Allow credentials (like cookies) if needed
  })
);

// Passport strategy
require("./config/passport"); // Ensure the passport strategies are initialized

// Routes
app.use("/auth", authRoutes); 
app.use("/openai", aiRoutes); 

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
