import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import eventService from "../Services/eventService";

const EventRegister = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    venue: '',
    city: '',
    eventDate: '',
    time: '',
    price: '',
    description: '',
    hostEmail: '',
    noOfSeats: '',
    category: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };


  const validateForm = (formData) => {
    const requiredFields = ['eventName', 'venue', 'city', 'eventDate', 'time', 'price', 'hostEmail', 'noOfSeats'];
    const errors = [];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        errors.push(`${field.charAt(0).toUpperCase()}${field.slice(1)} is required.`);
      }
    });

    // Additional validation (email format, price type, etc.)
    if (!validateEmail(formData.hostEmail)) {
      errors.push('Invalid email format.');
    }
    if (isNaN(formData.price) || formData.price < 0) {
      errors.push('Price must be a positive number.');
    }

    if (errors.length > 0) {
      alert('Validation errors:'+ errors);
      // Alert the user about the errors (e.g., display an error message or highlight missing fields)
      return false; // Indicate validation failure
    }

    return true; // Indicate successful validation
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm(formData)) {
      return;
    }

    // Submit form data using suitable method (e.g., API call, store in state)
    console.log('Form data:', formData); // For demonstration purposes

    eventService.createEvent(formData).then(()=>{
      alert("event details submitted to website! wait for admin to verify and confirm before posting on site")
    }).catch(()=>{
      alert("uh oh! something went wrong")
    })

    // Clear form or provide success message after successful submission

      setFormData({  
      eventName: '',
      venue: '',
      city: '',
      eventDate: '',
      time: '',
      price: '',
      description: '',
      hostEmail: '',
      noOfSeats: '',
      category: '',
    })
  };

  const validateEmail = (email) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
  };


  return (
    <div>
      <NavLink to={"/"}>
        <div className="pt-3 pl-4">
          <FaArrowLeft></FaArrowLeft>
          <span className="ml-2">Back to Homepage</span>
        </div>
      </NavLink>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading">
              <h2>Host an Event</h2>
            </div>
            <form action="">
              <div className="form-group">
                <label htmlFor="eventName" className="text-muted ml-4">
                  Event Name
                  <span style={{ color: "red" }}>
                    <sup> *</sup>
                  </span>
                </label>
                <input
                  type="text"
                  name="eventName"
                  className="signup-from form-control ml-4"
                  id="eventName"
                  placeholder="Enter event name"
                  defaultValue={formData.eventName}
                  onChange={handleChange} 
                ></input> 
              </div>
              <div className="form-group">
                <label htmlFor="venue" className="text-muted ml-4">
                  Venue
                  <span style={{ color: "red" }}>
                    <sup> *</sup>
                  </span>
                </label>
                <input
                  type="text"
                  name="venue"
                  className="signup-from form-control ml-4"
                  id="venue"
                  placeholder="Enter venue"
                  defaultValue={formData.venue}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="city" className="text-muted ml-4">
                    City
                  <span style={{ color: "red" }}>
                    <sup> *</sup>
                  </span>
                </label>
                <input
                  type="text"
                  name="city"
                  className="signup-from form-control ml-4"
                  id="city"
                  placeholder="Enter City"
                  defaultValue={formData.city}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="eventDate" className="text-muted ml-4">
                Event Date
                  <span style={{ color: "red" }}>
                    <sup> *</sup>
                  </span>
                </label>
                <input
                  type="date"
                  name="eventDate"
                  className="signup-from form-control ml-4"
                  id="eventDate"
                  placeholder="Enter Event Date"
                  defaultValue={formData.eventDate}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="time" className="text-muted ml-4">
                  Time
                  <span style={{ color: "red" }}>
                    <sup> *</sup>
                  </span>
                </label>
                <input
                  type="time"
                  name="time"
                  className="signup-from form-control ml-4"
                  id="time"
                  placeholder="Enter time"
                  defaultValue={formData.time}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="price" className="text-muted ml-4">
                  Price
                  <span style={{ color: "red" }}>
                    <sup> *</sup>
                  </span>
                </label>
                <input
                  type="number"
                  name="price"
                  className="signup-from form-control ml-4"
                  id="price"
                  placeholder="Enter price"
                  defaultValue={formData.price}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="description" className="text-muted ml-4">
                Description
                  <span style={{ color: "red" }}>
                    <sup> *</sup>
                  </span>
                </label>
                <input
                  type="text"
                  name="description"
                  className="signup-from form-control ml-4"
                  id="description"
                  placeholder="Enter description"
                  defaultValue={formData.description}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="hostEmail" className="text-muted ml-4">
                  Enter Registered Mail id
                  <span style={{ color: "red" }}>
                    <sup> *</sup>
                  </span>
                </label>
                <input
                  type="email"
                  name="hostEmail"
                  className="signup-from form-control ml-4"
                  id="hostEmail"
                  placeholder="Enter email"
                  defaultValue={formData.hostEmail}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="noOfSeats" className="text-muted ml-4">
                 Number of Seats
                  <span style={{ color: "red" }}>
                    <sup> *</sup>
                  </span>
                </label>
                <input
                  type="number"
                  name="noOfSeats"
                  className="signup-from form-control ml-4"
                  id="noOfSeats"
                  placeholder="Enter number of seats"
                  defaultValue={formData.noOfSeats}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="category" className="text-muted ml-4">
                  Category
                  <span style={{ color: "red" }}>
                    <sup> *</sup>
                  </span>
                </label>
                <p className="text-muted ml-4">Select category : CULTURAL, SPORTING , MUSIC, EXHIBITIONS, TECHNICAL</p>
                <input
                  type="text"
                  name="category"
                  className="signup-from form-control ml-4"
                  id="category"
                  placeholder="Enter category"
                  defaultValue={formData.category}
                  onChange={handleChange}
                ></input>
              </div>
              <button
                type="submit"
                class="signup-btn m-5 w-100 p-2"
                onClick={handleSubmit}
              >
                Create Event
              </button>
            </form>
          </div>
        </div>
    </div>
    </div>
  );
};

export default EventRegister;


/*
	private String eventName;

	private String venue;
	
	private String city;

	private LocalDate eventDate;
	
	private LocalTime time;

	private double price;

	private String description;
	
	private String hostEmail;
	
	private Integer noOfSeats;
	
	private String category;

*/