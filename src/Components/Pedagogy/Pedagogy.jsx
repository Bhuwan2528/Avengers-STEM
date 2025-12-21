import React from "react";
import "./Pedagogy.css";

import { FaAward, FaTools, FaGamepad, FaShieldAlt } from "react-icons/fa";

const Pedagogy = () => {
  return (
    <section className="pedagogy">
      <div className="pedagogy-inner">
        <span className="pedagogy-pill">PEDAGOGY</span>

        <h2 className="pedagogy-title">What makes us exceptional?</h2>

        <p className="pedagogy-desc">
          It’s unfair to promise one a shift in world and people without
          addressing the
          <br />
          Need to shift in perspective.
          <br />
          Effective learning needs an Efficient structure.
        </p>

        <div className="pedagogy-cards">
          <div className="pedagogy-card">
            <div className="pedagogy-index">1</div>
            <div className="pedagogy-icon medal">
              <FaAward />
            </div>
            <h3>India’s most Premium Lab</h3>
          </div>

          <div className="pedagogy-card">
            <div className="pedagogy-index">2</div>
            <div className="pedagogy-icon tools">
              <FaTools />
            </div>
            <h3>Verified and Reliable Components</h3>
          </div>

          <div className="pedagogy-card">
            <div className="pedagogy-index">3</div>
            <div className="pedagogy-icon vr">
              <FaGamepad />
            </div>
            <h3>Adaptable and Playful Ambience in our Labs</h3>
          </div>

          <div className="pedagogy-card">
            <div className="pedagogy-index">4</div>
            <div className="pedagogy-icon shield">
              <FaShieldAlt />
            </div>
            <h3>Centralized Solutions and Ecosystem</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pedagogy;
