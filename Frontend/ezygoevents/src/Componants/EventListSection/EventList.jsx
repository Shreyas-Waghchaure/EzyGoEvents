import React from "react";
import holder from "../Assets/holder.jpg";
import "./EventList.css";
import Card from "./Card";
const EventList = () => {
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
        <div className="card-deck">
        <Card/>
        <Card/>
        <Card/>
        </div>
    </div>
    <div align="center">

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
</div>
 </>
  );
  return component;
};

export default EventList;
