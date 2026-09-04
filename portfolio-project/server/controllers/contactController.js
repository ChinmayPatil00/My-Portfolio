const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

// 📧 Reusable transporter configured with direct SSL for high cloud reliability
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
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

exports.testMail = async (req, res) => {
  try {
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS ? `Set (${process.env.EMAIL_PASS.length} chars)` : "NOT SET";
    const dbName = mongoose.connection ? mongoose.connection.name : "none";
    const readyState = mongoose.connection ? mongoose.connection.readyState : 0;

    const info = await transporter.sendMail({
      from: user,
      to: user,
      subject: "Portfolio Diagnostic Test Mail",
      text: "If you are reading this, email sending from Render is 100% operational! 🚀"
    });

    res.json({
      success: true,
      emailUser: user,
      emailPass: pass,
      dbName: dbName,
      readyState: readyState,
      messageId: info.messageId
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      emailUser: process.env.EMAIL_USER || "NOT SET",
      emailPass: process.env.EMAIL_PASS ? `Set (${process.env.EMAIL_PASS.length} chars)` : "NOT SET",
      dbName: mongoose.connection ? mongoose.connection.name : "none",
      readyState: mongoose.connection ? mongoose.connection.readyState : 0,
      error: err.message,
      code: err.code
    });
  }
};

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required ❌"
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Message from ${name}`,
      text: `You have received a new contact message from your portfolio website:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nTimestamp: ${new Date().toISOString()}`
    };

    // 1. Save to MongoDB (if connected)
    const dbPromise = (async () => {
      try {
        if (mongoose.connection && mongoose.connection.readyState === 1) {
          const newContact = new Contact({ name, email, message });
          await newContact.save();
          console.log("Contact successfully saved to MongoDB ✅");
          return true;
        } else {
          console.warn("MongoDB is not connected (readyState !== 1). Stored in email only.");
          return false;
        }
      } catch (dbErr) {
        console.warn("MongoDB save error (non-fatal):", dbErr.message);
        return false;
      }
    })();

    // 2. Dispatch email to inbox
    const mailPromise = transporter.sendMail(mailOptions).then(info => {
      console.log("Email delivered to inbox ✅:", info.messageId);
      return info;
    });

    // Run both concurrently to minimize latency while guaranteeing delivery
    const [dbSaved, mailInfo] = await Promise.all([dbPromise, mailPromise]);

    return res.status(200).json({
      success: true,
      message: "Message sent and delivered successfully! ✅",
      dbSaved: dbSaved,
      emailId: mailInfo.messageId
    });

  } catch (error) {
    console.error("Error sending contact message:", error);
    if (!res.headersSent) {
      return res.status(500).json({
        success: false,
        message: "Failed to send message: " + (error.message || "Internal server error"),
        error: error.message
      });
    }
  }
};


