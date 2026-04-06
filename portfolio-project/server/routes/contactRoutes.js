const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    console.log("API HIT ✅");

    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
     await newContact.save();

    // Email setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "New Contact Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({
      message: "Message sent successfully ✅",
    });
       
    router.get("/", async (req, res) => {
  const data = await Contact.find();
  res.json(data);
});
    

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error sending message ❌",
    });
  }
});

module.exports = router;