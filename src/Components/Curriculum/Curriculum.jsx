import React from "react";
import "./Curriculum.css";
import { FaCheck } from "react-icons/fa";

const Curriculum = () => {
  return (
    <section className="curriculum">
      <h2 className="curriculum-title">
        Robotics & Coding Curriculum
      </h2>

      <div className="curriculum-grid">
        {/* Primary */}
        <div className="curriculum-card primary">
          <h3>Primary Classes</h3>

          <p className="curriculum-desc">
            Engaging, easy-to-understand courses that spark curiosity and
            nurture the creativity of young explorers.
          </p>

          <div className="curriculum-grade">3rd to 5th</div>

          <hr />

          <ul>
            <li><FaCheck /> Block Programming</li>
            <li><FaCheck /> Microbit & its programming</li>
            <li><FaCheck /> Basic Sensors</li>
          </ul>
        </div>

        {/* Middle */}
        <div className="curriculum-card middle">
          <h3>Middle Classes</h3>

          <p className="curriculum-desc">
            Hands-on projects that encourage problem-solving and innovation,
            helping students develop critical thinking skills.
          </p>

          <div className="curriculum-grade">6th to 8th</div>

          <hr />

          <ul>
            <li><FaCheck /> Arduino</li>
            <li><FaCheck /> Debugging & Troubleshooting</li>
            <li><FaCheck /> C++ Programming</li>
            <li><FaCheck /> Real-life Problem Solving</li>
          </ul>
        </div>

        {/* Senior */}
        <div className="curriculum-card senior">
          <h3>Senior Secondary</h3>

          <p className="curriculum-desc">
            Hands-on projects that encourage problem-solving and innovation,
            helping students develop critical thinking skills.
          </p>

          <div className="curriculum-grade">9th to 12th</div>

          <hr />

          <ul>
            <li><FaCheck /> IOT</li>
            <li><FaCheck /> Python Programming</li>
            <li><FaCheck /> Data Visualization</li>
          </ul>
        </div>
      </div>
      <div className="curriculum-btn meeting-btn-wrap">
        <button className="meeting-btn">
            Book a Meeting with us
            <span className="meeting-arrow">↗</span>
        </button>
      </div>
    </section>
  );
};

export default Curriculum;
