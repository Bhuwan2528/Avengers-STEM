import React from "react";
import "./Competition.css";

/* VIDEO */
import heroVideo from "../../assets/robotics-lab.webm";

/* IMAGES */
import img1 from "../../assets/competition1.avif";
import img2 from "../../assets/competition2.avif";
import img3 from "../../assets/competition3.avif";

const Competition = () => {
  return (
    <main className="competition-page">
      {/* ================= HERO WITH VIDEO ================= */}
      <section className="competition-hero">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-pill">COMPETITIONS & EXHIBITIONS</span>

          <h1>
            Empowering Tomorrow’s
            <br />
            Leaders to Shine on Every
            <br />
            Stage
          </h1>

          <p>
            Empowering Students to Compete, Excel, and Win Every Challenge
          </p>
        </div>
      </section>

      {/* ================= SECOND SECTION ================= */}
      <section className="competition-gallery">
        <p className="gallery-heading">
          We helped more than <span>150+</span> schools create memorable
          Exhibitions and Competitions
        </p>

        <div className="gallery-strip">
          {/* unique */}
          <div className="gallery-item">
            <img src={img1} alt="" />
          </div>
          <div className="gallery-item">
            <img src={img2} alt="" />
          </div>
          <div className="gallery-item">
            <img src={img3} alt="" />
          </div>

          {/* repeated cropped */}
          <div className="gallery-item cropped">
            <img src={img1} alt="" />
          </div>
          <div className="gallery-item cropped">
            <img src={img2} alt="" />
          </div>
        </div>
      </section>

      {/* ================= OUR VICTORIES ================= */}
<section className="victories-section">
  <div className="victories-header">
    <span className="victories-pill">OUR VICTORIES</span>
    <h2>Join Us to Compete and Claim Victory</h2>
    <p>
      We provide exceptional guidance to students for national and international
      level competitions, arrange annual exhibitions and preparations.
    </p>
  </div>

  {/* ROW 1 */}
  <div className="victory-row">
    <div className="victory-image">
      <img src="https://framerusercontent.com/images/8S1SfJpMOKGPjhDlYKyTZqNwi8.png?scale-down-to=1024&width=1730&height=1386" alt="" />
    </div>

    <div className="victory-content">
      <h3>
        Siddharth Kumar Gopal won Pradhanmantri Bal Puruskar – St. Thomas
        Residential School
      </h3>

      <p>
        <strong>Project Name –</strong> Boat O bed <br />
        A prototype of an intelligent bed, ‘Boat-o-Bed’, is aimed at making
        bedridden people Atmanirbhar in the event of a flood.
      </p>
    </div>
  </div>

  {/* ROW 2 (REVERSED) */}
  <div className="victory-row reverse">
    <div className="victory-image">
      <img src="https://framerusercontent.com/images/OLw2gVWtJJ6xJ3x7xI0AjOY758.png?scale-down-to=1024&width=1856&height=1037" alt="" />
    </div>

    <div className="victory-content">
      <h3>
        Siddharth Kumar Gopal won Pradhanmantri Bal Puruskar – St. Thomas
        Residential School
      </h3>

      <p>
        <strong>Project Name –</strong> Boat O bed <br />
        A prototype of an intelligent bed, ‘Boat-o-Bed’, is aimed at making
        bedridden people Atmanirbhar in the event of a flood.
      </p>
    </div>
  </div>

  {/* ROW 3 */}
  <div className="victory-row">
    <div className="victory-image">
      <img src="https://framerusercontent.com/images/aasvYS9GZB2pNpaTSzNV4hMCrA.jpeg?scale-down-to=1024&width=1280&height=960" alt="" />
    </div>

    <div className="victory-content">
      <h3>
        Siddharth Kumar Gopal won Pradhanmantri Bal Puruskar – St. Thomas
        Residential School
      </h3>

      <p>
        <strong>Project Name –</strong> Boat O bed <br />
        A prototype of an intelligent bed, ‘Boat-o-Bed’, is aimed at making
        bedridden people Atmanirbhar in the event of a flood.
      </p>
    </div>
  </div>
</section>


{/* ================= COMPETITION WINS ================= */}
<section className="wins-section">
  <div className="wins-header">
    <h2>
      With Our Expertise, Students Consistently Secure
      <br />
      Top Wins in Every Competition!
    </h2>
    <p>
      We provide exceptional guidance to students for competitions, arrange
      annual exhibitions and preparations.
    </p>
  </div>

  <div className="wins-grid">
    {/* CARD 1 */}
    <div className="win-card">
      <img src={img1} alt="" />
      <div className="win-card-body">
        <h4>Team GD Goenka</h4>
        <span>GD Goenka Sec 48 Gurugram</span>

        <ul>
          <li><strong>Competition:</strong> Blue Bells Tech Fest</li>
          <li><strong>Event:</strong> Robo Race</li>
          <li><strong>Position:</strong> 2nd</li>
        </ul>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="win-card">
      <img src={img2} alt="" />
      <div className="win-card-body">
        <h4>Team Sankalpana</h4>
        <span>Scindia Kanya Vidyalaya</span>

        <ul>
          <li><strong>Competition:</strong> Doon School Tech Conclave</li>
          <li><strong>Event:</strong> Line Follower</li>
          <li><strong>Position:</strong> 1st</li>
        </ul>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="win-card">
      <img src={img3} alt="" />
      <div className="win-card-body">
        <h4>Team GBS</h4>
        <span>Gyan Bharti School</span>

        <ul>
          <li><strong>Competition:</strong> Amity National Competition</li>
          <li><strong>Event:</strong> Line Following Robot</li>
          <li><strong>Position:</strong> 1st</li>
        </ul>
      </div>
    </div>
  </div>
</section>



{/* ================= SUPPORT STEPS ================= */}
<section className="support-section">
  <div className="support-header">
    <h2>From Registration to Mentorship, We Support Every Step</h2>
    <p>
      We offer complete support for every stage of the competition, from seamless
      registration to expert mentorship, training, and resources, ensuring
      participants are fully equipped to succeed.
    </p>
  </div>

  <div className="support-cards">
    <div className="support-card">
      <div className="support-icon">
        {/* trophy icon */}
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path
            fill="currentColor"
            d="M7 4V2h10v2h3v3a5 5 0 0 1-5 5h-1a5 5 0 0 1-4 3.9V18h3v2H8v-2h3v-2.1A5 5 0 0 1 7 12H6a5 5 0 0 1-5-5V4h6zm-4 2v1a3 3 0 0 0 3 3h1V6H3zm18 0h-4v4h1a3 3 0 0 0 3-3V6z"
          />
        </svg>
      </div>
      <h4>
        Aim for Prestigious National and International Competitions like WRO,
        Technoxian, NASA Robotics, and more, showcasing your skills on global
        platforms.
      </h4>
    </div>

    <div className="support-card">
      <div className="support-icon">
        {/* user icon */}
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path
            fill="currentColor"
            d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"
          />
        </svg>
      </div>
      <h4>
        Receive Expert Guidance and Personalized Mentorship for Success
      </h4>
    </div>

    <div className="support-card">
      <div className="support-icon">
        {/* chart icon */}
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path
            fill="currentColor"
            d="M3 3h2v18H3zm16 7h2v11h-2zM7 13h2v8H7zm4-6h2v14h-2zm4 4h2v10h-2z"
          />
        </svg>
      </div>
      <h4>
        Comprehensive Participation Support and Performance Analysis
      </h4>
    </div>
  </div>

  <div className="support-cta">
    <button>
      Want to compete? Join Us
      <span>↗</span>
    </button>
  </div>
</section>


{/* ================= EXHIBITIONS SUPPORT ================= */}
<section className="exhibition-section">
  <div className="exhibition-header">
    <h2>
      We help your school in organizing exhibitions for the students to
      showcase their innovations.
    </h2>
    <p>
      We offer complete support for every stage of the competition, from
      seamless registration to expert mentorship, training, and resources,
      ensuring participants are fully equipped to succeed.
    </p>
  </div>

  <div className="exhibition-cards">
    <div className="exhibition-card">
      <div className="exhibition-icon">
        {/* network / innovation icon */}
        <svg viewBox="0 0 24 24" width="26" height="26">
          <path
            fill="currentColor"
            d="M12 2a4 4 0 0 0-4 4a3.9 3.9 0 0 0 .3 1.5L4.9 10a4 4 0 1 0 1.1 2.7l3.4-2a4 4 0 0 0 5.2 0l3.4 2a4 4 0 1 0 1.1-2.7l-3.4-2A3.9 3.9 0 0 0 16 6a4 4 0 0 0-4-4Z"
          />
        </svg>
      </div>
      <p>
        Setting up interactive tech booths to showcase innovative projects by
        your students.
      </p>
    </div>

    <div className="exhibition-card">
      <div className="exhibition-icon">
        {/* calendar / event icon */}
        <svg viewBox="0 0 24 24" width="26" height="26">
          <path
            fill="currentColor"
            d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2Zm13 8H4v10h16V10Z"
          />
        </svg>
      </div>
      <p>
        Hosting exhibitions across diverse fields like AR/VR, Robotics, AI,
        and Coding etc.
      </p>
    </div>

    <div className="exhibition-card">
      <div className="exhibition-icon">
        {/* code / project icon */}
        <svg viewBox="0 0 24 24" width="26" height="26">
          <path
            fill="currentColor"
            d="M8 17L3 12l5-5l1.4 1.4L5.8 12l3.6 3.6Zm8 0l-1.4-1.4L18.2 12l-3.6-3.6L16 7l5 5Z"
          />
        </svg>
      </div>
      <p>
        Showcasing real-life, problem-solving projects aligned with your
        school's theme.
      </p>
    </div>
  </div>
</section>


    </main>
  );
};

export default Competition;
