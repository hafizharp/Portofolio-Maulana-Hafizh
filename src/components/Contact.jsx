import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill out all fields before sending.");
      return;
    }

    const phoneNumber = "6288225695707";
    const text = `Hello, my name is ${name}. My email is ${email}. Message: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h2 className="contact-title">
            Contact <span className="highlight">Me</span>
          </h2>
          <p className="contact-description">
            Let's connect! Reach out to me via email, WhatsApp, or visit me at my location.
          </p>
          <ul className="contact-details">
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:maulanahafizh234@gmail.com">
                maulanahafizh234@gmail.com
              </a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="https://wa.me/6288225695707" target="_blank" rel="noopener noreferrer">
                WhatsApp: +62 882 2569 5707
              </a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <a href="https://maps.app.goo.gl/7Cn49wMDe28V27TZ7" target="_blank" rel="noopener noreferrer">
                Tangerang, Indonesia
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={sendToWhatsApp}>
            <h3 className="form-title">Send Message</h3>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
