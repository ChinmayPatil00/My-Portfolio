const supabase = require('../supabaseClient');

// GET all projects
exports.getProjects = async (req, res) => {
  try {
    if (!supabase) return res.json([]);
    const { data, error } = await supabase.from('projects').select('*');
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD new project
exports.addProject = async (req, res) => {
  try {
    if (!supabase) return res.status(503).json({ message: "Supabase not configured" });
    const { data, error } = await supabase.from('projects').insert([req.body]).select();
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};