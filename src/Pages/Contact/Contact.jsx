import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { HiOutlineOfficeBuilding, HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    designation: "",
    schoolName: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0kz0gv1",     // ✅ Service ID
        "template_8vpq5bf",    // ✅ Common Template
        {
          ...formData,
          source: "Contact Section Form",
          time: new Date().toLocaleString(),
        },
        "-z97sqCiHxzig4fGk"    // ✅ Public Key
      )
      .then(() => {
        alert("Form submitted successfully");
        setFormData({
          name: "",
          phone: "",
          email: "",
          designation: "",
          schoolName: "",
          city: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to submit form");
      });
  };

  return (
    <>
    <section className="contact-section">
      {/* HERO */}
      <div className="contact-hero">
        <span className="contact-pill">LET&apos;S CONNECT</span>

        <h1 className="contact-title">
          We would love to hear <br /> from you{" "}
          <span className="contact-emoji">✉️</span>
        </h1>

        <p className="contact-subtitle">
          Have questions or want to connect? Share your basic details below, and
          we’ll get in touch!
        </p>
      </div>

      {/* CARD */}
      <div className="contact-card">
        {/* LEFT */}
        <div className="contact-left">
          <p className="contact-intro">
            Connect with us. Your insights matter.
            <br />
            Together, we can revolutionize education and empower future
            innovators. Let’s build tomorrow, today!
          </p>

          <div className="contact-info">
            <div className="info-block">
              <HiOutlineOfficeBuilding className="info-icon" />
              <div>
                <h4>Head Office</h4>
                <p>
                  1st Floor, Vishwakarma Bhawan,
                  <br />
                  Indian Institute of Technology Delhi,
                  <br />
                  Hauz Khas, South Delhi, New Delhi,
                  <br />
                  Delhi 110016
                </p>
              </div>
            </div>

            <div className="info-block">
              <FiPhone className="info-icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 9220531339, +91 8160209678</p>
              </div>
            </div>

            <div className="info-block">
              <HiOutlineMail className="info-icon" />
              <div>
                <h4>Email</h4>
                <p>school@AIvengers.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Contact No."
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <select
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          >
            <option value="">Designation</option>
            <option>Principal</option>
            <option>Teacher</option>
            <option>Coordinator</option>
            <option>Director</option>
          </select>

          <input
            type="text"
            name="schoolName"
            placeholder="School Name"
            value={formData.schoolName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />

          <button type="submit">
            Submit <span>↗</span>
          </button>

          <p className="form-note">
            We will reach out to you about 24 hours in work days
          </p>
        </form>
      </div>
    </section>

    {/* /* ================= FAQ SECTION ================= */}

<section className="faq-section">
  <div className="faq-header">
    <span className="faq-pill">WE&apos;VE GOT YOU COVERED</span>
    <h2 className="faq-title">Frequently Asked Questions</h2>
  </div>

  <div className="faq-list">
    <div className="faq-item">
      <p>What age groups and classes do you cater to with our STEM curriculums?</p>
      <span className="faq-icon">⌄</span>
    </div>

    <div className="faq-item">
      <p>
        What kind of support do we offer for schools participating in
        competitions and exhibitions?
      </p>
      <span className="faq-icon">⌄</span>
    </div>

    <div className="faq-item">
      <p>How do you set up a Robotics Lab in a school?</p>
      <span className="faq-icon">⌄</span>
    </div>

    <div className="faq-item">
      <p>What makes our iLMS different from other platforms?</p>
      <span className="faq-icon">⌄</span>
    </div>

    <div className="faq-item">
      <p>What is included in the Virtual Reality Lab setup?</p>
      <span className="faq-icon">⌄</span>
    </div>

    <div className="faq-item">
      <p>Can our school integrate existing resources into your programs?</p>
      <span className="faq-icon">⌄</span>
    </div>

    <div className="faq-item">
      <p>How do we get started with setting up a Maker Space in our school?</p>
      <span className="faq-icon">⌄</span>
    </div>
  </div>
</section>


    </>
  );
};

export default Contact;
