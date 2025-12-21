import React from "react";
import "./Hero.css";

/* ASSETS IMPORT */
import heroImage from "../../assets/hero-image.jpeg";


// School logos
import school1 from "../../assets/schools/school1.avif";
import school2 from "../../assets/schools/school1.avif";
import school3 from "../../assets/schools/school2.avif";
import school4 from "../../assets/schools/school1.avif";
import school5 from "../../assets/schools/school2.avif";
import school6 from "../../assets/schools/school1.avif";

const Hero = () => {
  return (
    <section className="hero">

      {/* GRID BACKGROUND */}
      <div className="hero-grid" />

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1>
            Empowering Schools <br />
            with <span>Cutting Edge Labs</span>
          </h1>

          <p>
            We deliver an interactive, hands-on tech learning experience
            for grades 3-12, building future-ready skills.
          </p>

          <button className="hero-btn">
            Book a Meeting <span>↗</span>
          </button>
        </div>

        {/* RIGHT VIDEO */}
        <div className="hero-right">
          <img
            src={heroImage}
            alt="Students learning"
            className="hero-media"
            />
        </div>

      </div>

      {/* TRUST TEXT */}
      <div className="trust-text">
        <span>30+</span> schools trust our services for their students
      </div>

      {/* LOGO SLIDER */}
      <div className="logo-slider">
        <div className="logo-track">
          {[school1, school2, school3, school4, school5, school6,
            school1, school2, school3, school4, school5, school6
          ].map((logo, index) => (
            <img src={logo} key={index} alt="School logo" />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
