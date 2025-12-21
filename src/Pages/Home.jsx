import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import ImpactSection from '../Components/ImpactSection/ImpactSection'
import ChooseSection from '../Components/ChooseSection/ChooseSection'
import CaseStudies from '../Components/CaseStudies/CaseStudies'
import Testimonials from '../Components/Testimonials/Testimonials'
import Footer from "../Components/Footer/Footer"

const Home = () => {
  return (
    <div>
      <Hero/>
      <ImpactSection/>
      <ChooseSection/>
      <CaseStudies/>
      <Testimonials/>
    </div>
  )
}

export default Home