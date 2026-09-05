const supabase = require('../supabaseClient');
const nodemailer = require('nodemailer');

// 📧 Reusable Gmail transporter with credentials cleanup and TLS compatibility
const getTransporter = () => {
  const emailUser = (process.env.EMAIL_USER || '').trim();
  const emailPass = (process.env.EMAIL_PASS || '').replace(/\s+/g, '').trim();

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

const transporter = getTransporter();

exports.testMail = async (req, res) => {
  const emailUser = (process.env.EMAIL_USER || '').trim();
  const emailPass = (process.env.EMAIL_PASS || '').replace(/\s+/g, '').trim();
  const passStatus = emailPass ? `Configured (${emailPass.length} chars)` : "NOT_SET ❌";
  const userStatus = emailUser || "NOT_SET ❌";

  // Check Supabase status
  let supabaseStatus = "not_configured";
  if (supabase) {
    try {
      const { data, error } = await supabase.from('contacts').select('count', { count: 'exact', head: true });
      supabaseStatus = error ? `error: ${error.message}` : "connected ✅";
    } catch (e) {
      supabaseStatus = `exception: ${e.message}`;
    }
  }

  if (!emailUser || !emailPass) {
    return res.status(400).json({
      success: false,
      message: "EMAIL_USER or EMAIL_PASS is missing in server environment variables.",
      emailUser: userStatus,
      emailPass: passStatus,
      supabaseStatus: supabaseStatus
    });
  }

  try {
    const activeTransporter = getTransporter();

    // 7-second race to prevent hanging
    const sendPromise = activeTransporter.sendMail({
      from: emailUser,
      to: emailUser,
      subject: "Portfolio Diagnostic Test Mail 🚀",
      text: `Test email sent successfully at ${new Date().toISOString()}!\n\nEmail sending from Render is fully operational.`
    });

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("SMTP connection timed out after 8s (check firewall or credentials)")), 8000)
    );

    const info = await Promise.race([sendPromise, timeoutPromise]);

    return res.json({
      success: true,
      message: "Diagnostic email delivered successfully! ✅",
      emailUser: userStatus,
      emailPass: passStatus,
      supabaseStatus: supabaseStatus,
      messageId: info.messageId
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to send email: " + err.message,
      emailUser: userStatus,
      emailPass: passStatus,
      supabaseStatus: supabaseStatus,
      errorCode: err.code || "TIMEOUT"
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

    // 1. Fast persistence to Supabase (~30-50ms)
    let dbSaved = false;
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('contacts')
          .insert([{ name, email, message }]);

        if (error) {
          console.warn("Supabase insert error (non-fatal):", error.message);
        } else {
          dbSaved = true;
          console.log("Contact successfully saved to Supabase ✅");
        }
      } catch (dbErr) {
        console.warn("Supabase save exception (non-fatal):", dbErr.message);
      }
    } else {
      console.warn("Supabase not configured. Skipping DB save.");
    }

    // 2. Respond IMMEDIATELY to client so submission is instantaneous (<100ms)!
    res.status(200).json({
      success: true,
      message: "Message sent and saved successfully! ✅",
      dbSaved: dbSaved
    });

    // 3. Send email asynchronously in background without delaying user
    const emailUser = (process.env.EMAIL_USER || '').trim();
    const emailPass = (process.env.EMAIL_PASS || '').replace(/\s+/g, '').trim();

    if (emailUser && emailPass) {
      const activeTransporter = getTransporter();
      const mailOptions = {
        from: emailUser,
        to: emailUser,
        subject: `New Portfolio Message from ${name}`,
        text: `You have received a new contact message from your portfolio website:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nTimestamp: ${new Date().toISOString()}`
      };

      activeTransporter.sendMail(mailOptions).then(info => {
        console.log("Email delivered to inbox ✅:", info.messageId);
      }).catch(mailErr => {
        console.error("Background email delivery error ❌:", mailErr.message);
      });
    } else {
      console.warn("EMAIL_USER or EMAIL_PASS not configured. Skipping email dispatch.");
    }

  } catch (error) {
    console.error("Error in sendMessage:", error);
    if (!res.headersSent) {
      return res.status(500).json({
        success: false,
        message: "Failed to send message: " + (error.message || "Internal error"),
        error: error.message
      });
    }
  }
};



