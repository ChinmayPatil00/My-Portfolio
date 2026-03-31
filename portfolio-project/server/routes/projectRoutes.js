const express = require('express');
const router = express.Router();

const { getProjects, addProject } = require('../controllers/projectController');

// GET
router.get('/', getProjects);

// POST
router.post('/', addProject);

module.exports = router;