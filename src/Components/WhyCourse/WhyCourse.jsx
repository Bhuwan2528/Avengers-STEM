import React from "react";
import "./WhyCourse.css";

import leftImage from "../../assets/robotic-hand.avif";   // replace with actual path
import rightImage from "../../assets/human-hand.avif"; // replace with actual path

const WhyCourse = ({ value = "Robotics" }) => {
  return (
    <section className="why-course">
      {/* Left Image */}
      <img
        src={leftImage}
        alt="Robotic Hand"
        className="why-course-image left"
      />

      {/* Content */}
      <div className="why-course-content">
        <span className="why-course-pill">WHY THIS COURSE?</span>

        <h2 className="why-course-title">
          Building a Future <br />
          with <span>{value}</span>
        </h2>

        <p className="why-course-desc">
          Schools in Delhi NCR are embracing {value.toLowerCase()} courses,
          empowering students with confidence and hands-on skills for
          tomorrow’s challenges
        </p>
      </div>

      {/* Right Image */}
      <img
        src={rightImage}
        alt="Human Hand"
        className="why-course-image right"
      />
    </section>
  );
};

export default WhyCourse;
