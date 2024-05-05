// backend/server.js
const express = require('express');
const cors = require('cors'); // Import CORS middleware
const apiRoutes = require('./routes/api');
const db = require('./db');

const app = express();

app.use(cors()); // Use CORS middleware
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
