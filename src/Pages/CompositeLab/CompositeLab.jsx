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

const CompositeLab = () => {
  return (
    <main className="robotics-page">

      {/* HERO / BANNER */}
      <section className="composite-hero">
        <div className="composite-hero-bg" />
        <div className="composite-hero-overlay" />
        <div className="composite-hero-content">
          <span className="composite-hero-pill">Composite LAB</span>
          <h1 className="composite-hero-title">Craft your own Reality</h1>
          <p className="composite-hero-desc">
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
            We design custom Composite Labs for your schools.
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

      <WhyCourse value={"Composite Skill Labs"}/>
      <OurLabs value={"Composite Skill"}/>
      <SampleDesign value={"Composite Skill"}/>
      <Pedagogy/>
    <OurFacilities/>
    <Curriculum/>
    <QuestionsCTA/>
    </main>
  );
};

export default CompositeLab;
