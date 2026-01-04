import React from "react";
import "./ImpactSection.css";

/* PARTNER LOGOS */
import partner1 from "../../assets/partners/partner1.png";
import partner2 from "../../assets/partners/partner2.png";
import partner3 from "../../assets/partners/partner3.png";

const ImpactSection = () => {
  return (
    <section className="impact-section">

      {/* BACKGROUND CIRCLES */}
      <div className="impact-circles" />

      <div className="impact-container">

        {/* PARTNERS */}
        <h4 className="partners-title">Our Proud Partners</h4>

        <div className="partners-logos">
          <img src="https://www.iitg.ac.in/img/iitgfooter.png" alt="Partner" />
          <img src="https://cmsredesign.channeli.in/library/assets/images/IITR175.png" alt="Partner" />
          <img src="https://www.iitb.ac.in/themes/custom/iitb_bootstrap/logo.png" alt="Partner" />
        </div>

        {/* IMPACT TITLE */}
        <h2 className="impact-title">Our Impact</h2>

        {/* IMPACT CARDS */}
        <div className="impact-grid">
          <div className="impact-card">
            <h3>15 Y+</h3>
            <p>Leagcy</p>
          </div>

          <div className="impact-card">
            <h3>1 lac +</h3>
            <p>Student Base</p>
          </div>

          <div className="impact-card">
            <h3>500+</h3>
            <p>Projects created</p>
          </div>

          <div className="impact-card">
            <h3>1K+</h3>
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
