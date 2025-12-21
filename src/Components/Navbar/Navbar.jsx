import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-logo">
          <img src={logo} alt="Rancho Labs" />
        </div>

        {/* NAV LINKS */}
        <nav className="navbar-links">

          <a href="#">Home</a>

          {/* LABS */}
          <div
            className={`nav-item ${openMenu === "labs" ? "open" : ""}`}
            onClick={() => toggleMenu("labs")}
          >
            <span>Labs</span>
            <div className="dropdown">
              <a href="#">Robotics Lab</a>
              <a href="#">AR / VR Lab</a>
              <a href="#">Composite Lab</a>
            </div>
          </div>

          {/* PRODUCTS */}
          <div
            className={`nav-item ${openMenu === "products" ? "open" : ""}`}
            onClick={() => toggleMenu("products")}
          >
            <span>Products</span>
            <div className="dropdown">
              <a href="#">iLMS</a>
            </div>
          </div>

          {/* SERVICES */}
          <div
            className={`nav-item ${openMenu === "services" ? "open" : ""}`}
            onClick={() => toggleMenu("services")}
          >
            <span>Services</span>
            <div className="dropdown">
              <a href="#">Competition Support</a>
              <a href="#">Exhibition Support</a>
              <a href="#">Our Curriculum</a>
            </div>
          </div>

          <a href="#">Contact Us</a>
        </nav>

        {/* CTA */}
        <div className="navbar-cta">
          <button className="cta-button">
            Book a Meeting <span className="cta-arrow">↗</span>
          </button>
        </div>
 
      </div>
    </header>
  );
};

export default Navbar;
