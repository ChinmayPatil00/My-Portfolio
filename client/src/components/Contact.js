import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);

        // Clear form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert(data.message || "Error sending message ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message ❌");
    }

    setLoading(false);
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      
      <form className="contact-form solid-card" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading} className="btn btn-primary" style={{width: '100%', justifyContent: 'center'}}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p style={{ textAlign: "center", color: "#00ff88", marginTop: "10px" }}>
            Message sent successfully ✅
          </p>
        )}

      </form>
    </section>
  );
}

export default Contact;