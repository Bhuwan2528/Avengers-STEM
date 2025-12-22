import React from "react";
import "./ILMS.css";
import ilmsVideo from "../../assets/ilms-demo.webm"; // tum apna video path laga dena
import Curriculum from '../../Components/Curriculum/Curriculum'
import choose1 from '../../assets/choose-card1.avif'
import choose2 from '../../assets/choose-card2.avif'
import choose3 from '../../assets/choose-card3.avif'
import choose4 from '../../assets/choose-card4.avif'

const ILMS = () => {
  return (
    <main className="ilms-page">

      {/* HERO SECTION */}
      <section className="ilms-hero">
    <div className="ilms-bg-grid"></div>

    <div className="ilms-hero-inner">
        {/* LEFT */}
        <div className="ilms-hero-content">
        <h1>
            Create <span className="accent">Impactful Learning</span>
            <br />
            <span className="accent">Environments</span> with Our
            <br />
            Platform
        </h1>

        <p>
            Innovative Solutions for Schools, Instructors, and Students to
            Drive Success
        </p>

        <a className="ilms-cta">
            Schedule a demo <span>↗</span>
        </a>
        </div>

        {/* RIGHT */}
        <div className="ilms-video-wrap">
        <div className="ilms-video-glow"></div>

        <video
            src={ilmsVideo}
            autoPlay
            muted
            loop
            playsInline
        />
        </div>
    </div>
    </section>


        {/* STATS SECTION */}
        <section className="ilms-stats">
            <h2>Students love our Platform</h2>

            <div className="ilms-stats-grid">
            <div className="stat-card">
                <h3>20+</h3>
                <p>Schools Onboard</p>
            </div>
            <div className="stat-card">
                <h3>25K+</h3>
                <p>Student base</p>
            </div>
            <div className="stat-card">
                <h3>100+</h3>
                <p>Projects created</p>
            </div>
            <div className="stat-card">
                <h3>200+</h3>
                <p>Hours of content</p>
            </div>
            </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="ilms-why">
  {/* HEADER */}
  <div className="ilms-why-header">
    <span className="ilms-pill">WHY CHOOSE US?</span>
    <h2>Innovate, Engage, Achieve</h2>
    <p>
      Streamline your teaching process, foster student engagement, and
      achieve academic success effortlessly with our all-in-one platform
    </p>
  </div>

  {/* FIRST BIG CARD */}
  <div className="ilms-why-box">
    <div className="ilms-why-content">
      <h3>
        School <span>Personalized</span>
        <br />
        Homepage
      </h3>

      <p>
        A fully customized school homepage, featuring student achievements,
        the principal&apos;s vision, competition listings, and personalized
        content to reflect each school&apos;s unique identity and goals.
      </p>
    </div>

    <div className="ilms-why-image">
      <img src={choose1} alt="School personalized homepage" />
    </div>
  </div>

  {/* SECONDARY CARDS (SAME SECTION) */}
  <div className="ilms-why-cards">

    <div className="ilms-feature-card blue">
      <div className="ilms-feature-text">
        <h3>
          Key Progress Insights <br />
          <span>at your Fingertips</span>
        </h3>
        <p>
          Through Admin Panel efficiently manage students and monitor their
          progress, with tools to track performance, attendance, and activity,
          ensuring a seamless academic management experience.
        </p>
      </div>
      <div className="ilms-feature-image">
        <img src={choose2} alt="Admin panel insights" />
      </div>
    </div>

    <div className="ilms-feature-card green reverse">
      <div className="ilms-feature-text">
        <h3>
          Interactive & <br />
          <span>Engaging Content</span>
        </h3>
        <p>
          Interactive and engaging content, including quizzes, videos, and fun
          activities, designed to captivate students and enhance their learning
          experience through active participation.
        </p>
      </div>
      <div className="ilms-feature-image">
        <img src={choose3} alt="Interactive learning" />
      </div>
    </div>

    <div className="ilms-feature-card mint">
      <div className="ilms-feature-text">
        <h3>
          Community that <br />
          <span>drives Innovation</span>
        </h3>
        <p>
          A community that drives innovation, enabling students to share
          projects, stories, and achievements with peers and parents,
          inspiring collaboration and celebrating creativity.
        </p>
      </div>
      <div className="ilms-feature-image">
        <img src={choose4} alt="Student community" />
      </div>
    </div>

  </div>
</section>



      <Curriculum/>

    </main>
  );
};

export default ILMS;
