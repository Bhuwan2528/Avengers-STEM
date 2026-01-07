import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    setMobileOpen(false);
    setActiveAccordion(null);
  };

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleNav("/")}>
          <img id="logo1" src={logo} alt="" />
          <img src={logo1} alt="" />
        </div>

        {/* DESKTOP */}
        <nav className="navbar-links">
          <a onClick={() => handleNav("/")}>Home</a>

          <div className="nav-item">
            <span>Labs</span>
            <div className="dropdown">
              <a onClick={() => handleNav("/robotics-lab")}>Robotics Lab</a>
              <a onClick={() => handleNav("/ar-vr-lab")}>AI / Drone Lab</a>
              <a onClick={() => handleNav("/composite-lab")}>Composite Lab</a>
            </div>
          </div>

          <div className="nav-item">
            <span>Products</span>
            <div className="dropdown">
              <a onClick={() => handleNav("/ilms")}>iLMS</a>
            </div>
          </div>

          <div className="nav-item">
            <span>Services</span>
            <div className="dropdown">
              <a onClick={() => handleNav("/competition-and-exhibition")}>Competition Support</a>
              <a onClick={() => handleNav("/competition-and-exhibition")}>Exhibition Support</a>
              <a onClick={() => handleNav("/ilms")}>Our Curriculum</a>
            </div>
          </div>

          <a onClick={() => handleNav("/contact")}>Contact Us</a>
        </nav>

        <button className="hamburger" onClick={() => setMobileOpen(true)}>
          <FiMenu />
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      <div className={`mobile-sidebar ${mobileOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="navbar-logo">
            <img id="logo1" src={logo} alt="" />
            <img src={logo1} alt="" />
          </div>
          <button className="close-btn" onClick={() => setMobileOpen(false)}>
            <FiX />
          </button>
        </div>

        <div className="sidebar-links">
          <div className="sidebar-main" onClick={() => handleNav("/")}>Home</div>

          <div className={`sidebar-accordion ${activeAccordion === "labs" ? "open" : ""}`}>
            <div className="sidebar-accordion-title" onClick={() => toggleAccordion("labs")}>
              Labs
            </div>
            <div className="sidebar-accordion-content">
              <a onClick={() => handleNav("/robotics-lab")}>Robotics Lab</a>
              <a onClick={() => handleNav("/ar-vr-lab")}>AI / Drone Lab</a>
              <a onClick={() => handleNav("/composite-lab")}>Composite Lab</a>
            </div>
          </div>

          <div className={`sidebar-accordion ${activeAccordion === "products" ? "open" : ""}`}>
            <div className="sidebar-accordion-title" onClick={() => toggleAccordion("products")}>
              Products
            </div>
            <div className="sidebar-accordion-content">
              <a onClick={() => handleNav("/ilms")}>iLMS</a>
            </div>
          </div>

          <div className={`sidebar-accordion ${activeAccordion === "services" ? "open" : ""}`}>
            <div className="sidebar-accordion-title" onClick={() => toggleAccordion("services")}>
              Services
            </div>
            <div className="sidebar-accordion-content">
              <a onClick={() => handleNav("/competition-and-exhibition")}>Competition Support</a>
              <a onClick={() => handleNav("/competition-and-exhibition")}>Exhibition Support</a>
              <a onClick={() => handleNav("/ilms")}>Our Curriculum</a>
            </div>
          </div>

          <div className="sidebar-main" onClick={() => handleNav("/contact")}>
            Contact Us
          </div>

          <button className="sidebar-cta">Book a Meeting</button>
        </div>
      </div>

      {mobileOpen && <div className="sidebar-backdrop" onClick={() => setMobileOpen(false)} />}
    </header>
  );
};

export default Navbar;
