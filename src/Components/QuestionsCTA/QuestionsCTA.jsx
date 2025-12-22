import React from "react";
import "./QuestionsCTA.css";
import { FiArrowUpRight } from "react-icons/fi";

const QuestionsCTA = () => {
  return (
    <section className="questions-cta">
      <h2 className="questions-title">Still have questions?</h2>

      <div className="questions-actions">
        <a href="#" className="cta-btn primary">
          Checkout our AR/VR Lab
          <FiArrowUpRight />
        </a>

        <a href="#" className="cta-btn secondary">
          Get Quotation for Robotics Lab
          <FiArrowUpRight />
        </a>

        <a href="#" className="cta-btn dark">
          Start building Robotics Lab with us
          <FiArrowUpRight />
        </a>
      </div>
    </section>
  );
};

export default QuestionsCTA;
