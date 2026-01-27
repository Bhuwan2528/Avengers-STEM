import React, { useState } from "react";
import "./ContactForm.css";
import emailjs from "emailjs-com";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend
} from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    schoolName: "",
    intrestedIn: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0kz0gv1",     // ✅ Service ID
        "template_8vpq5bf",    // ✅ Template ID
        {
          ...formData,
          source: "Contact Page Form",
          time: new Date().toLocaleString(),
        },
        "-z97sqCiHxzig4fGk"    // ✅ Public Key
      )
      .then(() => {
        alert("Form submitted successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          schoolName: "",
          intrestedIn: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to submit form");
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT : FORM */}
        <div className="contact-form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-grid">

              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>

              <div className="form-group">
                <label>School / Organization</label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  placeholder="Your school name"
                />
              </div>

            </div>

            <div className="form-group full">
              <label>I'm Interested In *</label>
              <select
                name="intrestedIn"
                value={formData.intrestedIn}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option>AI Lab Setup</option>
                <option>Robotics Lab Setup</option>
                <option>STEM Programs</option>
                <option>School Partnership</option>
              </select>
            </div>

            <div className="form-group full">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your requirements..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit Request <FiSend />
            </button>
          </form>
        </div>

        {/* RIGHT : INFO (UNCHANGED) */}
        <div className="contact-info">

          <div className="info-card">
            <h3>Contact Information</h3>

            <div className="info-item">
              <span className="icon"><FiPhone /></span>
              <div>
                <p>Call Us</p>
                <span>+91 9999204834</span>
              </div>
            </div>

            <div className="info-item">
              <span className="icon"><FiMail /></span>
              <div>
                <p>Email Us</p>
                <span>info@aivengers.co.in</span>
              </div>
            </div>

            <div className="info-item">
              <span className="icon"><FiMapPin /></span>
              <div>
                <p>Visit Us</p>
                <span>
                  E cell IIT Gawhati, Bangalore office, Gurgaon office, Jaipur office.
                </span>
              </div>
            </div>

            <div className="info-item">
              <span className="icon"><FiClock /></span>
              <div>
                <p>Business Hours</p>
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
                <span>Sunday: Closed</span>
              </div>
            </div>
          </div>

          <div className="response-card">
            <h4>Quick Response Guaranteed</h4>
            <p>Our team responds to all inquiries within 24 hours</p>

            <div className="response-time">
              <span>24hrs</span>
              <small>Average Response Time</small>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
