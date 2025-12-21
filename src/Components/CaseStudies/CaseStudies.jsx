import React from "react";
import "./CaseStudies.css";

/* IMAGES (replace later) */
import case1 from "../../assets/case1.avif";
import case2 from "../../assets/case2.avif";

const CaseStudies = () => {
  return (
    <section className="case-section">
      <div className="case-container">

        {/* TOP CONTENT */}
        <span className="case-pill">CASE STUDIES</span>

        <h2 className="case-title">
          We helped schools <span>SUCCEED.</span>
        </h2>

        <p className="case-subtitle">
          Our comprehensive solutions handle everything from curriculum
          development to student assessments, freeing up your time.
        </p>

        {/* CASE CARDS */}
        <div className="case-grid">

          {/* CARD 1 */}
          <div className="case-card">
            <img src={case1} alt="GD Goenka School" />

            <h3>GD Goenka School's Success Story</h3>

            <p>
              As a premier educational institution, GD Goenka School
              recognized the growing importance of STEM education.
              The collaboration with Rancho Labs began with a clear
              understanding...
            </p>

            <button className="case-btn">
              View Case Study <span>↗</span>
            </button>
          </div>

          {/* CARD 2 */}
          <div className="case-card">
            <img src={case2} alt="SAJS School" />

            <h3>SAJS's improved Admission Rates</h3>

            <p>
              As a premier educational institution, SAJS recognized
              the importance of STEM education and partnered with
              Rancho Labs to integrate innovative programs...
            </p>

            <button className="case-btn">
              View Case Study <span>↗</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
