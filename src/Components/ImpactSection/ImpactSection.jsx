import React from "react";
import "./ImpactSection.css";

/* PARTNER LOGOS */
import partner1 from "../../assets/partners/partner1.avif";
import partner2 from "../../assets/partners/partner2.png";
import partner3 from "../../assets/partners/partner3.avif";

const ImpactSection = () => {
  return (
    <section className="impact-section">

      {/* BACKGROUND CIRCLES */}
      <div className="impact-circles" />

      <div className="impact-container">

        {/* PARTNERS */}
        <h4 className="partners-title">Our Proud Partners</h4>

        <div className="partners-logos">
          <img src={partner1} alt="Partner" />
          <img src={partner2} alt="Partner" />
          <img src={partner3} alt="Partner" />
        </div>

        {/* IMPACT TITLE */}
        <h2 className="impact-title">Our Impact</h2>

        {/* IMPACT CARDS */}
        <div className="impact-grid">
          <div className="impact-card">
            <h3>30+</h3>
            <p>Enrolled Schools</p>
          </div>

          <div className="impact-card">
            <h3>25K+</h3>
            <p>Student base</p>
          </div>

          <div className="impact-card">
            <h3>100+</h3>
            <p>Projects created</p>
          </div>

          <div className="impact-card">
            <h3>200+</h3>
            <p>Hours of content</p>
          </div>
        </div>

        {/* CTA */}
        <button className="impact-btn">
          Learn More <span>↗</span>
        </button>

      </div>
    </section>
  );
};

export default ImpactSection;
