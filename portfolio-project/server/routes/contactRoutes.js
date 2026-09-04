const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const Contact = require("../models/Contact");

router.get("/ping", (req, res) => {
  res.status(200).json({ status: "ok", time: Date.now() });
});

router.get("/test-mail", contactController.testMail);

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