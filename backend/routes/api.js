// backend/routes/api.js
const express = require('express');
const router = express.Router();
// Example endpoint
router.get('/example', (req, res) => {
    res.json({ message: 'Hello from backend!' });
});

module.exports = router;
