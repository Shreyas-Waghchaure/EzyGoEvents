import React from 'react'
import "../styles/signup.css"
import loginimg from '../Componants/Assets/login.png'
import { FaArrowLeft } from "react-icons/fa6";
const Signup = () => {
  const component = <>
  <a href="/">

  <div className='pt-3 pl-4'>
  <FaArrowLeft></FaArrowLeft>
  <span className='ml-2'>Back to Homepage</span>
  </div>

  </a>
  <div className="container">
  <div className='row'>
     <div className='col-md-6'>
      <div className='heading'>
        <h2>Create an account</h2>
      </div>
      <form action="">
      <div className='form-group'>
        <label htmlFor="Name" className='text-muted ml-4'>Name<span style={{"color":"red"}}><sup> *</sup></span></label>
        <input type='text' className='signup-from form-control ml-4' id='Name' placeholder='eg. John Doe'></input>
      </div>
      <div className='form-group'>
        <label htmlFor="email" className='text-muted ml-4'>Email<span style={{"color":"red"}}><sup> *</sup></span></label>
        <input type='text' className='signup-from form-control ml-4' id='email' placeholder='eg. johndoe@gmail.com'></input>
      </div>
      <div className='form-group'>
        <label htmlFor="password" className='text-muted ml-4'>Password<span style={{"color":"red"}}><sup> *</sup></span></label>
        <input type='text' className='signup-from form-control ml-4' id='password' placeholder='password'></input>
      </div>
      <div className='form-group'>
        <label htmlFor="cPassword" className='text-muted ml-4'>Confirm password<span style={{"color":"red"}}><sup> *</sup></span></label>
        <input type='text' className='signup-from form-control ml-4' id='cPassword' placeholder='confirm password'></input>
      </div>
      <button type="submit" class="signup-btn ml-4 w-100 p-2">Sign Up</button>
      <div className='ml-4 mt-2'>
        <p>Already have an account? <span style={{"color":"blue"}}><a href='/login'>login</a></span></p>
      </div>
      </form>
     </div> 
     <div className='col-md-6'>
      <img src={loginimg} className='img-signup'></img>      
     </div>
  </div>
  </div>
  </>
  return component
}

export default Signup