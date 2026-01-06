import React from "react";
import "./SampleDesign.css";

import designImg1 from "../../assets/labs/robotics.png"; // replace
import designImg2 from "../../assets/labs/drone.png"; // replace
import designImg3 from "../../assets/labs/lab3.jpeg"; // replace


const SampleDesign = ({ value }) => {
  return (
    <section className="sample-design">
      <div className="sample-design-header">
        <h2 className="sample-design-title">
          Sample design for <span>{value}</span> Lab
        </h2>

        <p className="sample-design-subtitle">
          Choose from Our Sample {value} Lab Designs and Customize Them to Suit
          Your School&apos;s Needs
        </p>
      </div>

      <div className="sample-design-grid">
        <div className="sample-design-card">
          <img src={designImg1} alt={`${value} lab design 1`} />
        </div>

        <div className="sample-design-card">
          <img src={designImg2} alt={`${value} lab design 2`} />
        </div>

        <div className="sample-design-card">
          <img src={designImg3} alt={`${value} lab design 3`} />
        </div>
      </div>
    </section>
  );
};

export default SampleDesign;
