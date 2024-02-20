import React from 'react'
import { FaTicketAlt,FaRocket,FaUserFriends} from "react-icons/fa";
import './Offering.css';
const Offering = () => {
const component = <>
    <hr/>
    <div className='heading'>
        <h1 align="center">Our Offerings</h1>
    </div>
    <div className='services' align="center">
        <div className='first'>
        <div>
            <FaTicketAlt size={45}/>
        </div>
        <div className='title'>
            <h4>Book Tickets Hassle-Free</h4>
        </div>
        <div className='info'>
        Easily find and book tickets for various social gathering <br />events happening in your locality.
        </div>
        <div>
            <a href="/" style={{'textDecoration':'none','color':'black'}}>Explore {'>'}</a>
        </div>
        </div>
        <div className='first'>
        <div>
            <FaRocket size={45}/>
        </div>
        <div className='title'>
            <h4>Host Your Own Memorable Events</h4>
        </div>
        <div className='info'>
        Create and manage your own events with ease, <br />making unforgettable memories.
        </div>
        <div>
            <a href="" style={{'textDecoration':'none','color':'black'}}> Get Started {'>'}</a>
        </div>
        </div>
        <div className='first'>
        <div>
            <FaUserFriends size={45}/>
        </div>
        <div className='title'>
            <h4>Connect with Like-Minded People</h4>
        </div>
        <div className='info'>
        Join a community of individuals who share <br />your interests and passions.
        </div>
        <div>
            <a href="" style={{'textDecoration':'none','color':'black'}}>Join Now {'>'}</a>
        </div>
        </div>
    </div>
</>
  return component
}

export default Offering