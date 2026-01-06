import React from "react";
import "./Hero.css";

import { HiOutlineAcademicCap, HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdOutlineVerified } from "react-icons/md";

/* ASSETS */
import heroVideo from "../../assets/robotics-lab.webm";

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

          <span className="hero-badge">
            India’s Most Advanced Labs
          </span>

          <h1>
            AIVenger is India’s most <br />
            <span>Advanced AI & Robotics</span> Skill Lab
          </h1>

          <p className="hero-lead">
            Where students don’t just learn — they <span>build, launch,
            and lead</span>.
          </p>

          <p className="hero-subtext">
            From STEM innovation to AI-powered entrepreneurship,
            we prepare children for the world that doesn’t exist yet.
          </p>

          <ul className="hero-highlights">
            <li>
              <HiOutlineAcademicCap />
              NEP 2020 Aligned Curriculum
            </li>
            <li>
              <MdOutlineVerified />
              Trusted by 50+ Schools
            </li>
            <li>
              <HiOutlineOfficeBuilding />
              World-Class Innovation Labs
            </li>
          </ul>


          <div className="hero-actions">
            <button className="hero-btn primary">
              Book a Meeting <span>↗</span>
            </button>

            {/* <span className="hero-tagline">
              👉 Because the future belongs to the makers.
            </span> */}
          </div>

        </div>

        {/* RIGHT VIDEO */}
        <div className="hero-right">
          <video
            className="hero-media"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

      </div>

      {/* TRUST TEXT */}
      <div className="trust-text">
        <span>50+</span> schools trust AIVenger to shape future innovators
      </div>

      {/* LOGO SLIDER */}
      <div className="logo-slider">
        <div className="logo-track">
          {[
            school1, school2, school3, school4, school5, school6,
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
