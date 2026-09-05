const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const supabase = require("../supabaseClient");

router.get("/ping", (req, res) => {
  res.status(200).json({ status: "ok", time: Date.now() });
});

router.get("/test-mail", contactController.testMail);

router.post("/", contactController.sendMessage);

router.get("/", async (req, res) => {
  try {
    if (!supabase) {
      return res.status(503).json({ message: "Supabase not configured" });
    }
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return res.status(500).json({ message: "Error fetching contacts", error: error.message });
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching contacts", error: err.message });
  }
});

module.exports = router;