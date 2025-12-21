import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import RoboticsLab from './Pages/RoboticsLab/RoboticsLab'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/robotics-lab" element={<RoboticsLab/>} />
      </Routes>
        <Footer/>
    </div>
  )
}

export default App