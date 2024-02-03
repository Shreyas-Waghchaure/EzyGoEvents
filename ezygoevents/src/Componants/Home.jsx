import React from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import background from "../assets/background2.jpg"
const Home = () => {
  return (
    <div style={{background:`url(${background})`,height: "90vh",
    fontSize: "20px",
    backgroundSize:"100%",
    backgroundRepeat: "no-repeat",
    }}>
    <NavBar/>
    <HeroSection/>
    </div>  
  )
}

export default Home