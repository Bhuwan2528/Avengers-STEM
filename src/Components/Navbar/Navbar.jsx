import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo1.png"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const naviagate = useNavigate();

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <div onClick={()=> naviagate('/')} className="navbar-logo">
          <img id="logo1" src={logo} alt="Rancho Labs" />
           <img src={logo1} alt="" />
        </div>

        {/* NAV LINKS */}
        <nav className="navbar-links">

          <a onClick={()=> naviagate('/')}>Home</a>

          {/* LABS */}
          <div
            className={`nav-item ${openMenu === "labs" ? "open" : ""}`}
            onClick={() => toggleMenu("labs")}
          >
            <span>Labs</span>
            <div className="dropdown">
              <a onClick={()=> naviagate('/robotics-lab')}>Robotics Lab</a>
              <a onClick={()=> naviagate('/ar-vr-lab')}>AR / VR Lab</a>
              <a onClick={()=> naviagate('/composite-lab')}>Composite Lab</a>
            </div>
          </div>

          {/* PRODUCTS */}
          <div
            className={`nav-item ${openMenu === "products" ? "open" : ""}`}
            onClick={() => toggleMenu("products")}
          >
            <span>Products</span>
            <div className="dropdown">
              <a onClick={()=> naviagate('/ilms')}>iLMS</a>
            </div>
          </div>

          {/* SERVICES */}
          <div
            className={`nav-item ${openMenu === "services" ? "open" : ""}`}
            onClick={() => toggleMenu("services")}
          >
            <span>Services</span>
            <div className="dropdown">
              <a onClick={()=> naviagate('/competition-and-exhibition')}>Competition Support</a>
              <a onClick={()=> naviagate('/competition-and-exhibition')}>Exhibition Support</a>
              <a onClick={()=> naviagate('/ilms')}>Our Curriculum</a>
            </div>
          </div>

          <a onClick={()=> naviagate('/contact')}>Contact Us</a>
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
