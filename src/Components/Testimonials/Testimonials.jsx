import React from "react";
import "./Testimonials.css";

/* IMAGES / VIDEO THUMB (replace later) */
import person1 from "../../assets/person1.avif";
import person2 from "../../assets/person2.avif";

const Testimonials = () => {
  return (
    <section className="testimonial-section">

      <h2 className="testimonial-heading">
        What our <span>valuable partners</span> have to say ?
      </h2>

      {/* TESTIMONIAL 1 */}
      <div className="testimonial-row">
        <div className="testimonial-content">
          <h4 className="testimonial-name">Mrs. Anuradha Handa</h4>
          <p className="testimonial-designation">
            Principal, GD Goenka School, Gurugram
          </p>

          <blockquote>
            “Our growth no longer necessitates the recruitment and
            education of additional design professionals”
          </blockquote>
        </div>

        <div className="testimonial-media">
          <img src={person1} alt="Testimonial video" />
          <div className="play-btn">▶</div>
        </div>
      </div>

      {/* TESTIMONIAL 2 (REVERSED) */}
      <div className="testimonial-row reverse">
        <div className="testimonial-content">
          <h4 className="testimonial-name">Mrs. XYZ Name</h4>
          <p className="testimonial-designation">
            Principal, ABC International School
          </p>

          <blockquote>
            “The partnership enabled us to implement STEM education
            seamlessly while focusing on student outcomes.”
          </blockquote>
        </div>

        <div className="testimonial-media">
          <img src={person2} alt="Testimonial video" />
          <div className="play-btn">▶</div>
        </div>
      </div>

      <div className="meeting-btn-wrap">
        <button className="meeting-btn">
            Book a Meeting with us
            <span className="meeting-arrow">↗</span>
        </button>
      </div>


    </section>
  );
};

export default Testimonials;

