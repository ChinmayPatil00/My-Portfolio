const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required ❌"
      });
    }

    // Save to DB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // 📧 Email setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // 📧 Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,  // you receive it
      subject: `New Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: "Message sent & email delivered ✅"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error sending message",
      error: error.message
    });
  }
};
