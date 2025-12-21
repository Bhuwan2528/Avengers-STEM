import React from "react";
import "./RoboticsLab.css";
import video from "../../assets/robotics-lab.webm"
import WhyCourse from "../../Components/WhyCourse/WhyCourse";
import OurLabs from '../../Components/OurLabs/OurLabs'
import SampleDesign from "../../Components/SampleDesign/SampleDesign";
import Pedagogy from "../../Components/Pedagogy/Pedagogy"

const RoboticsLab = () => {
  return (
    <main className="robotics-page">

      {/* HERO / BANNER */}
      <section className="robotics-hero">
        <div className="robotics-hero-bg" />
        <div className="robotics-hero-overlay" />
        <div className="robotics-hero-content">
          <span className="robotics-hero-pill">ROBOTICS LAB</span>
          <h1 className="robotics-hero-title">Transform with Robotics</h1>
          <p className="robotics-hero-desc">
            Robotics is at the forefront of modern industries, emerging as a
            groundbreaking technology set to reshape the future.
          </p>
        </div>
      </section>

      {/* CUSTOM STEM LABS SECTION */}
      <section className="robotics-stem">
        <div className="robotics-stem-content">
          <span className="robotics-stem-pill">CUSTOM STEM LABS</span>

          <p className="robotics-stem-subtext">
            We provide everything from personalized learning spaces through
            iLMS to hands-on projects and competition support, guiding schools
            every step of the way.
          </p>

          <h2 className="robotics-stem-title">
            We design custom Robotics Labs for our schools.
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

      <WhyCourse/>
      <OurLabs/>
      <SampleDesign value={"Robotics"}/>
      <Pedagogy/>

    </main>
  );
};

export default RoboticsLab;
