import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import RoboticsLab from './Pages/RoboticsLab/RoboticsLab'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ARVRLab from './Pages/ARVRLab/ARVRLab'
import CompositeLab from './Pages/CompositeLab/CompositeLab'
import ILMS from "./Pages/ILMS/ILMS"
import Competition from './Pages/Competition/Competition'
import Contact from './Pages/Contact/Contact'

const App = () => {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/robotics-lab" element={<RoboticsLab/>} />
        <Route path="/ar-vr-lab" element={<ARVRLab/>} />
        <Route path="/composite-lab" element={<CompositeLab/>} />
        <Route path="/ilms" element={<ILMS/>} />
        <Route path="/competition-and-exhibition" element={<Competition/>} />
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>
        <Footer/>
    </div>
  )
}

export default App