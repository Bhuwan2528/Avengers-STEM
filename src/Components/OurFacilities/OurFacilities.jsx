import React from "react";
import "./OurFacilities.css";

import img3D from "../../assets/facilities/printer.png";
import imgDrone from "../../assets/facilities/drone.png";
import imgIot from "../../assets/facilities/iot.png";
import imgMechanical from "../../assets/mechanical.avif";
import imgTools from "../../assets/facilities/tools.webp";
import imgSoldering from "../../assets/facilities/soldering.jpeg";

const OurFacilities = () => {
  return (
    <section className="facilities">
      <div className="facilities-header">
        <span className="facilities-pill">OUR FACILITIES</span>

        <h2 className="facilities-title">
          Ready to elevate your Lab with our facilities
        </h2>

        <p className="facilities-desc">
          We provide the following comprehensive facilities to enhance your
          school lab, ensuring it is well-equipped to support cutting-edge
          learning and hands-on experimentation for students
        </p>
      </div>

      <div className="facilities-grid">
        <FacilityCard
          img={img3D}
          title="3D Printer Station"
          desc="A dedicated space for hands-on learning with 3D printing technology."
        />
        <FacilityCard
          img={imgDrone}
          title="Drone Station"
          desc="A specialized area for exploring and learning drone technology."
        />
        <FacilityCard
          img={imgIot}
          title="IOT Station"
          desc="A space for hands-on experience with Internet of Things (IoT) projects."
        />
        <FacilityCard
          img={imgMechanical}
          title="Mechanical Station"
          desc="Exploring and using mechanical tools in your projects."
        />
        <FacilityCard
          img={imgTools}
          title="Tools Station"
          desc="Fully equipped station for hands-on learning with various tools."
        />
        <FacilityCard
          img={imgSoldering}
          title="Soldering Station"
          desc="A dedicated area for precision soldering and electronics assembly."
        />
      </div>
    </section>
  );
};

const FacilityCard = ({ img, title, desc }) => {
  return (
    <div className="facility-card">
      <div className="facility-image">
        <img src={img} alt={title} />
      </div>
      <div className="facility-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default OurFacilities;
