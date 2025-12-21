import React from "react";
import "./OurLabs.css";

import labImg1 from "../../assets/lab1.avif"; // replace
import labImg2 from "../../assets/lab2.avif"; // replace
import labImg3 from "../../assets/lab3.avif"; // replace

const OurLabs = () => {
  return (
    <section className="our-labs">
      <div className="our-labs-inner">
        {/* Pill */}
        <span className="our-labs-pill">OUR LABS</span>

        {/* Text */}
        <p className="our-labs-text">
          We have our <span>25+</span> <strong>cutting edge labs</strong> set up
          in multiple schools in Delhi, providing the tools that today’s
          students need to tackle future standards.
        </p>

        {/* Images */}
        <div className="our-labs-grid">
          <div className="our-labs-card">
            <img src={labImg1} alt="Robotics lab classroom" />
          </div>
          <div className="our-labs-card">
            <img src={labImg2} alt="Computer lab session" />
          </div>
          <div className="our-labs-card">
            <img src={labImg3} alt="Students learning robotics" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLabs;
