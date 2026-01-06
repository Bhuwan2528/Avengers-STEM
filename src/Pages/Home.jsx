import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import ImpactSection from '../Components/ImpactSection/ImpactSection'
import ChooseSection from '../Components/ChooseSection/ChooseSection'
import CaseStudies from '../Components/CaseStudies/CaseStudies'
import Testimonials from '../Components/Testimonials/Testimonials'
import Footer from "../Components/Footer/Footer"
import ContactForm from '../Components/ContactForm/ContactForm'

const Home = () => {
  const [homeData, setHomeData] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/home`)
      .then((res) => res.json())
      .then((data) => setHomeData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!homeData) {
    return <p></p>;
  }

  return (
    <div>
      <Hero heroData={homeData.hero} />
      <ImpactSection impactData={homeData.impact} />
      <ChooseSection chooseData={homeData.choose} />
      <CaseStudies caseData={homeData.cases} />
      <Testimonials testimonialData={homeData.testimonials} />
      <ContactForm contactData={homeData.contact} />
    </div>
  )
}

export default Home
