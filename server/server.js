const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectdb = require('./config/db');
const zoneRoutes = require('./routes/zoneRoutes');
const path = require('path');

dotenv.config();         // Load environment variables
connectdb();             // Connect to MongoDB

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API routes
app.use('/api/zones', zoneRoutes);

// Port setup
const PORT = process.env.PORT || 6500;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
