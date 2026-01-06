import React from "react";
import "./Footer.css";
import { FiInstagram, FiYoutube } from "react-icons/fi";
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* LEFT INFO */}
        <div className="footer-brand">
          <div className="footer-logo"><img src={logo} alt="" /></div>
          <p>
            Building the next generation of innovators through hands-on AI, Robotics, and Drone education. Empowering students aged 3-18 accross India.
          </p>
        </div>

        {/* ABOUT */}
        <div className="footer-col">
          <h4>About</h4>
          <ul>
            <li>AIvengers</li>
            <li>Makerspace</li>
            <li>LMS</li>
            <li>Competitions</li>
            <li>AR/VR</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>Contact</li>
            <li><strong>Mobile</strong> : 9999204834</li>
            <li><strong>Email</strong> : info@aivengers.co.in</li>
            <li><strong>Website</strong> : ainvengers.co.in</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>Term & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <span>Copyright RanchoLabs. All right reserved.</span>

        <div className="footer-socials">
          <a href="#"><FiInstagram /> Instagram</a>
          <a href="#"><FiYoutube /> Youtube</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
