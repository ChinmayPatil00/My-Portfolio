const supabase = require('../supabaseClient');
const nodemailer = require('nodemailer');

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
    
    // Probe Supabase connection & contacts table
    let supabaseStatus = "not_configured";
    if (supabase) {
      const { data, error } = await supabase.from('contacts').select('count', { count: 'exact', head: true });
      if (error) {
        supabaseStatus = `error: ${error.message} (Ensure the 'contacts' table exists in Supabase)`;
      } else {
        supabaseStatus = "connected ✅";
      }
    }

    const info = await transporter.sendMail({
      from: user,
      to: user,
      subject: "Portfolio Diagnostic Test Mail",
      text: "If you are reading this, email sending from your portfolio server is 100% operational! 🚀"
    });

    res.json({
      success: true,
      emailUser: user,
      emailPass: pass,
      supabaseStatus: supabaseStatus,
      messageId: info.messageId
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      emailUser: process.env.EMAIL_USER || "NOT SET",
      emailPass: process.env.EMAIL_PASS ? `Set (${process.env.EMAIL_PASS.length} chars)` : "NOT SET",
      supabaseConfigured: !!supabase,
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

    // 1. Save to Supabase (if connected)
    const dbPromise = (async () => {
      try {
        if (supabase) {
          const { data, error } = await supabase
            .from('contacts')
            .insert([{ name, email, message }]);

          if (error) {
            console.warn("Supabase insert error (non-fatal):", error.message);
            return false;
          }
          console.log("Contact successfully saved to Supabase ✅");
          return true;
        } else {
          console.warn("Supabase is not configured (SUPABASE_URL/SUPABASE_KEY missing). Stored in email only.");
          return false;
        }
      } catch (dbErr) {
        console.warn("Supabase save exception (non-fatal):", dbErr.message);
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



