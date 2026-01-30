import React from "react";
import "./CaseStudies.css";

/* IMAGES (replace later) */
import case1 from "../../assets/students/student5.jpeg";
import case2 from "../../assets/students/student1.jpeg";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
  const navigate = useNavigate();
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

            <h3>RPS Inernational School's Success Story</h3>

            <p>
              As a premier educational institution, RPS International School
              recognized the growing importance of STEM education.
              The collaboration with Rancho Labs began with a clear
              understanding...
            </p>

                        <a href="/contact">
            <button className="case-btn">
              Know More <span>↗</span>
            </button>
            </a>
          </div>

          {/* CARD 2 */}
          <div className="case-card">
            <img src={case2} alt="ZAD Global School School" />

            <h3>ZAD Global School's improved Admission Rates</h3>

            <p>
              As a premier educational institution, ZAD Global School recognized
              the importance of STEM education and partnered with
              Rancho Labs to integrate innovative programs...
            </p>

                        <a href="/contact">
            <button className="case-btn">
              Know More <span>↗</span>
            </button>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
