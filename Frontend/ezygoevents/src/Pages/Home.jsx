import React from 'react'

import Hero from '../Componants/HeroSection/Hero'
import EventList from '../Componants/EventListSection/EventList'
import Offering from '../Componants/Offerings/Offering'
import Footer from '../Componants/Footer/Footer'


const Home = () => {
  return (
    <div>
      
      <Hero/>
      <EventList/>
      <Offering/>
      <Footer/>
    </div>
  )
}

export default Home