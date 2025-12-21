import React from "react";
import "./ChooseSection.css";

/* LAB IMAGES */
import lab1 from "../../assets/labs/lab1.avif";
import lab2 from "../../assets/labs/lab2.avif";
import lab3 from "../../assets/labs/lab3.avif";
import card2 from "../../assets/card-2.avif";
import service1 from "../../assets/services-1.avif"
import service2 from "../../assets/services-2.avif"
import service3 from "../../assets/services-3.avif"
/* ICONS */
import { HiOutlineBookOpen } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiOutlineCube } from "react-icons/hi";

const ChooseSection = () => {
  return (
    <section className="choose-section">

      {/* INTRO */}
      <div className="choose-intro">
        <span className="choose-pill">WHY CHOOSE US?</span>

        <h2>
          The one-stop-solution to STEM <br /> Education
        </h2>

        <p>
          We offer end-to-end solutions for schools with Skill Labs,
          CBSE-aligned curriculums, instructor support, and immersive
          learning experiences.
        </p>
      </div>

      {/* NORMAL FLOW (NO STACKING) */}
      <div className="stack-area">

        {/* CARD 1 */}
        <div className="stack-card card-1">
          <div className="stack-card-inner">
            <h3>Cutting Edge Labs</h3>

            <div className="labs-grid">
              <div className="lab-card">
                <img src={lab1} alt="Robotics Lab" />
                <h4>Robotics Lab</h4>
                <p>
                  Robotics Lab fosters innovation, coding, automation,
                  engineering, and hands-on learning.
                </p>
                <button>Know More ↗</button>
              </div>

              <div className="lab-card">
                <img src={lab2} alt="AR VR Lab" />
                <h4>AR/VR Lab</h4>
                <p>
                  AR/VR Lab creates immersive learning, innovation,
                  simulation, and virtual experiences.
                </p>
                <button>Know More ↗</button>
              </div>

              <div className="lab-card">
                <img src={lab3} alt="Composite Lab" />
                <h4>Composite Lab</h4>
                <p>
                  An advanced lab enabling innovation, AI, automation,
                  engineering, and experimentation.
                </p>
                <button>Know More ↗</button>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="stack-card card-2">
          <div className="stack-card-inner">
            <div className="card-2-content">
              <div className="card-2-media">
                <img src={card2} alt="Interactive LMS" />
              </div>

              <div className="card-2-text">
                <h3>Learning Management System (iLMS)</h3>
                <p>
                  Bringing robotics to classrooms has never been easier.
                  iLMS empowers educators with tools to make hands-on
                  learning seamless and impactful.
                </p>
                <button className="outline-btn">
                  Learn more <span>↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
            <div className="stack-card card-3">
            <div className="stack-card-inner">
                <h3>End to End Services</h3>

                <div className="labs-grid">

                <div className="lab-card">
                    <img src={service1} alt="Competition Support" />
                    <h4>Competition Support</h4>
                    <p>
                    Win various inter-school competitions with our support!
                    </p>
                    <button>Know More ↗</button>
                </div>

                <div className="lab-card">
                    <img src={service2} alt="Exhibition Support" />
                    <h4>Exhibition Support</h4>
                    <p>
                    We offer comprehensive exhibition support for schools.
                    </p>
                    <button>Know More ↗</button>
                </div>

                <div className="lab-card">
                    <img src={service3} alt="Instructor Support" />
                    <h4>Instructor Support</h4>
                    <p>
                    Expert instructors to enhance the learning experience.
                    </p>
                    <button>Know More ↗</button>
                </div>

                </div>
            </div>
            </div>

        {/* CARD 4 */}
        <div className="stack-card card-4">
        <div className="stack-card-inner">
            <h3>Future ready curriculum & Kits</h3>

            <div className="icon-grid">

            <div className="icon-card">
                <div className="icon-circle">
                <HiOutlineBookOpen />
                </div>
                <h4>NEP Powered Curriculum</h4>
                <p>
                Our NEP 2020-aligned curriculum prepares students for the
                future which is Tech.
                </p>
            </div>

            <div className="icon-card">
                <div className="icon-circle">
                <HiOutlineDocumentText />
                </div>
                <h4>Workbooks Integration</h4>
                <p>
                Our workbooks combine traditional and digital learning
                methods giving an advanced learning process.
                </p>
            </div>

            <div className="icon-card">
                <div className="icon-circle">
                <HiOutlineCube />
                </div>
                <h4>Innovative Kits</h4>
                <p>
                Explore hands-on learning with our innovative kits designed
                to inspire creativity and knowledge.
                </p>
            </div>

            </div>
        </div>
        </div>



      </div>
    </section>
  );
};

export default ChooseSection;
