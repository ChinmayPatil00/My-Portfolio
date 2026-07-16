const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const Contact = require("../models/Contact");

router.post("/", contactController.sendMessage);

router.get("/", async (req, res) => {
  try {
    const data = await Contact.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching contacts" });
  }
});

module.exports = router;