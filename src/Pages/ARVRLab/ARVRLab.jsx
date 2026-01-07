import React from "react";
import "./ARVRLab.css";
import video from "../../assets/robotics-lab.webm"
import WhyCourse from "../../Components/WhyCourse/WhyCourse";
import OurLabs from '../../Components/OurLabs/OurLabs'
import SampleDesign from "../../Components/SampleDesign/SampleDesign";
import Pedagogy from "../../Components/Pedagogy/Pedagogy"
import OurFacilities from "../../Components/OurFacilities/OurFacilities";
import Curriculum from "../../Components/Curriculum/Curriculum"
import QuestionsCTA from "../../Components/QuestionsCTA/QuestionsCTA";

const ARVRLab = () => {
  return (
    <main className="robotics-page">

      {/* HERO / BANNER */}
      <section className="arvr-hero">
        <div className="arvr-hero-bg" />
        <div className="arvr-hero-overlay" />
        <div className="arvr-hero-content">
          <span className="arvr-hero-pill">AI / Drone LABS</span>
          <h1 className="arvr-hero-title">Craft your own Reality</h1>
          <p className="arvr-hero-desc">
            Augmented and Virtual Reality are revolutionizing modern industries and  technologies poised to reshape the world.
          </p>
        </div>
      </section>

      {/* CUSTOM STEM LABS SECTION */}
      <section className="robotics-stem">
        <div className="robotics-stem-content">
          <span className="robotics-stem-pill">CUSTOM STEM LABS</span>

          <p className="robotics-stem-subtext">
            Personalized Learning Spaces  to Empower Schools Every Step of the Way.
          </p>

          <h2 className="robotics-stem-title">
            We design custom AI & Drone Labs for your schools.
          </h2>
        </div>
      </section>

      {/* FULL WIDTH VIDEO */}
      <section className="robotics-video">
        <video
          className="robotics-video-element"
          src={video} /* you will add */
          autoPlay
          muted
          loop
          playsInline
        />
      </section>

      <WhyCourse value={"AI & Drone Labs"}/>
      <OurLabs value={"AI & Drone"}/>
      <SampleDesign value={"AI & Drone"}/>
      <Pedagogy/>
    <OurFacilities/>
    <Curriculum/>
    <QuestionsCTA/>
    </main>
  );
};

export default ARVRLab;
