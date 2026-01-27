import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import ImpactSection from "../Components/ImpactSection/ImpactSection";
import ChooseSection from "../Components/ChooseSection/ChooseSection";
import CaseStudies from "../Components/CaseStudies/CaseStudies";
import Testimonials from "../Components/Testimonials/Testimonials";
import Footer from "../Components/Footer/Footer";
import ContactForm from "../Components/ContactForm/ContactForm";
import PopupForm from "../Components/PopupForm/PopupForm"; // ✅ FIX

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <Hero openPopup={() => setShowPopup(true)} />
      <ImpactSection />
      <ChooseSection />
      <CaseStudies />
      <Testimonials openPopup={() => setShowPopup(true)} />
      <ContactForm />

      {showPopup && (
        <PopupForm closePopup={() => setShowPopup(false)} />
      )}
    </div>
  );
};

export default Home;
