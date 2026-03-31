const express = require('express');
const router = express.Router();

const { sendMessage } = require('../controllers/contactController');

router.post('/', sendMessage);   // ✅ THIS IS IMPORTANT

module.exports = router;