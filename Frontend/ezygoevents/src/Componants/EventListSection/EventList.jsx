import React, { useEffect, useState } from "react";
import holder from "../Assets/holder.jpg";
import "./EventList.css";
import Card from "./Card";
import ExploreCard from "../ExploreCardSection/ExploreCard";
import ExploreService from "../../Services/ExploreService";
import { Link } from "react-router-dom";
const EventList = () => {
  const[eventarr,setEventArr] = useState([]);

  const fetchData = ()=>{
    ExploreService.getAllEvents().then(
      (result)=>{
        setEventArr([...result.data]);
      }
    ).catch((err)=>{
      console.log(err);
    })

  }

  useEffect(()=>{
        fetchData();
     },[])
  const component = (
    <>
    <hr />
      <div className="heading">
        <h1 align="center">Discover Every-Day</h1>
        <p align="center">
          Explore the latest and most popular social gathering events happening
          near you. <br />
          Book your tickets now!
        </p>
      </div>
      <div className="cards">
        <div className="card-deck d-flex justify-content-center">

          {eventarr.slice(0,3).map(e=> e.status === "CONFIRMED"?<ExploreCard key={e.id} event={e} getData={fetchData} />:<h6 align="center">No Event Avilable</h6>)}

        </div>
    </div>
    <div align="center">

<Link to={"/explore"}>
<button
      type="button"
      class="btn m-3"
      style={{
        borderRadius: "0",
        border: "2px solid black",
        color: "black",
        width: "120px",
      }}
    >View All</button>
  </Link>
</div>
 </>
  );
  return component;
};

export default EventList;
