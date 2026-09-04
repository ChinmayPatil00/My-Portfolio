import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  // Pre-warm backend when visitor views the portfolio (mitigates cold-start latency)
  useEffect(() => {
    const defaultApiUrl = process.env.NODE_ENV === "development"
      ? ""
      : "https://my-portfolio-82yx.onrender.com";
    const baseUrl = process.env.REACT_APP_API_URL || defaultApiUrl;
    const pingUrl = baseUrl
      ? (baseUrl.endsWith('/api/contact') ? `${baseUrl}/ping` : `${baseUrl.replace(/\/$/, '')}/api/contact/ping`)
      : '/api/contact/ping';

    fetch(pingUrl, { mode: 'cors' }).catch(() => {
      // Quietly ignore network errors during pre-warm
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const defaultApiUrl = process.env.NODE_ENV === "development"
        ? ""
        : "https://my-portfolio-82yx.onrender.com";
      const baseUrl = process.env.REACT_APP_API_URL || defaultApiUrl;
      const url = baseUrl
        ? (baseUrl.endsWith('/api/contact') ? baseUrl : `${baseUrl.replace(/\/$/, '')}/api/contact`)
        : '/api/contact';

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get("content-type") || "";
      let data = {};
      if (contentType.includes("application/json")) {
        data = await response.json();
      }

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: "✓ Message sent successfully! I will get back to you soon."
        });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 6000);
      } else {
        const errorMsg = data.message || (contentType.includes("text/html")
          ? "Backend is not connected. Please ensure your backend is active and REACT_APP_API_URL is configured."
          : "Failed to send message. Please try again.");
        setStatus({
          type: "error",
          message: errorMsg
        });
      }
    } catch (error) {
      console.error("Contact submit error:", error);
      setStatus({
        type: "error",
        message: "Network error: Unable to reach backend server. Please verify your connection."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ color: "var(--accent-color)" }}
      >
        Contact Me
      </motion.h2>

      <motion.form 
        className="contact-form solid-card" 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {status && (
          <div className={`contact-status-msg ${status.type}`}>
            {status.message}
          </div>
        )}

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        ></textarea>
        <button 
          type="submit" 
          className="contact-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </motion.form>
    </section>
  );
}

export default Contact;