const Project = require('../models/Project');

// GET all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD new project
exports.addProject = async (req, res) => {
  try {
    console.log("BODY DATA:", req.body);  // 👈 ADD THIS LINE

    const project = new Project(req.body);
    const savedProject = await project.save();
    res.json(savedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};