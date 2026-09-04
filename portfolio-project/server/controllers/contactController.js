const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// 📧 Reusable transporter with connection pooling for low latency
const transporter = nodemailer.createTransport({
  service: 'gmail',
  pool: true,
  maxConnections: 3,
  maxMessages: 100,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Warm up / verify SMTP transport
transporter.verify().then(() => {
  console.log("Nodemailer SMTP transporter ready 🚀");
}).catch(err => {
  console.warn("Nodemailer SMTP verification warning:", err.message);
});

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required ❌"
      });
    }

    // 1. Fast DB persistence (~10-20ms)
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // 2. Respond immediately to the client so form submission feels instantaneous (<100ms)
    res.status(200).json({
      success: true,
      message: "Message sent & saved successfully! ✅"
    });

    // 3. Dispatch email asynchronously in the background
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions).then(info => {
      console.log("Email delivered to inbox:", info.messageId);
    }).catch(err => {
      console.error("Background email delivery error:", err.message);
    });

  } catch (error) {
    console.error("Error saving contact:", error);
    if (!res.headersSent) {
      res.status(500).json({
        message: "Error sending message",
        error: error.message
      });
    }
  }
};

