const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const lotRoutes = require('./routes/lots');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/auctionDB')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use('/lots', lotRoutes);

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
