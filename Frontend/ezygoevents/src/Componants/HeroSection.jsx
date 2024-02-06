import React from 'react'
import background from "../assets/background2.jpg"
const HeroSection = () => {
  return (
    <>

    <h1 className="pt-5 pl-5 m-3 t-3"
    style={{color:'white'}}>Discover Exciting Events<br/> Near You Today!</h1>
    <p className="pt-2 pl-5 m-3 t-3" style={{color:'white'}}>Find and book tickets for concerts, festivals, and more with ease.</p>
    <div className="btn-wrapper d-flex pt-2 pl-5 t-3">
    <button type="button" class="btn m-3" style={{'backgroundColor':'white','fontWeight':'bold', 'borderRadius':'0','color':'black','width':'140px'}}>Explore</button>
    <button type="button" class="btn m-3" style={{'borderRadius':'0', 'border':'2px solid white','color':'white','width':'120px'}}>Sign up</button>
    </div>
    </>
  )
}

export default HeroSection