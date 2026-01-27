import { useState } from "react";
import emailjs from "emailjs-com";
import "./PopupForm.css";

const PopupForm = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0kz0gv1",      // ✅ Service ID
        "template_9pv7umw",     // ✅ Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          source: "Home Popup Form",
          time: new Date().toLocaleString(),
        },
        "-z97sqCiHxzig4fGk"     // ✅ Public Key
      )
      .then(() => {
        alert("Form submitted successfully");
        closePopup();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send email");
      });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={closePopup}>×</button>

        <h2>Request a Callback</h2>
        <p>Fill the form and we’ll contact you shortly</p>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
