import React, { useEffect, useState } from "react";
import "../styles/details.css";
import image2 from "../Componants/Assets/holder.jpg";
import { useParams } from "react-router-dom";
import ExploreService from "../Services/ExploreService";
const Details = (props) => {

  const params = useParams();
  const [eventDetails, setEventdetails] = useState({
    id: "",
    eventName: "",
    venue: "",
    city: "",
    eventDate: "",
    time: "",
    price:"",
    description:"",
    status: "",
    category: ""
  });
  useEffect(() => {
    console.log(params.id)
    ExploreService.getById(params.id)
      .then((result) => {
        setEventdetails({ ...result.data });
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  return (
    <div className="container py-5">
      <div className="row d-flex flex-column flex-md-row align-items-center">
        <div className="col-md-6">
          <img src={image2} className="event-image m-5 w-75 h-75" />
        </div>
        <div className="col-md-6 event-details">
          
          <h1>{eventDetails.eventName}</h1>
          <ul className="event-info">
            <li>
              <i className="fas fa-map-marker-alt"></i>{eventDetails.venue},{eventDetails.city}
            </li>
            <li>
              <i className="far fa-calendar-alt"></i> {eventDetails.eventDate}
            </li>
            <li>
              <i className="far fa-clock"></i> {eventDetails.time}
            </li>
            <li>
              <i className="fas fa-tags"></i> {eventDetails.category}
            </li>
          </ul>
          <h5 className="event-price">₹ {eventDetails.price}</h5>
          <p className="event-description">
            {eventDetails.description}
          </p>
          <button
              type="button"
              class="btn mt-3"
              style={{
                backgroundColor: "black",
                fontWeight: "bold",
                borderRadius: "0",
                color: "white",
                width: "140px",
              }}
            >
           Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
