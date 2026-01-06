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

  return (
    <div>
      <Hero />
      <ImpactSection />
      <ChooseSection />
      <CaseStudies  />
      <Testimonials  />
      <ContactForm />
    </div>
  )
}

export default Home
