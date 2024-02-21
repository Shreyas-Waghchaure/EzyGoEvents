import React from "react";
import image2 from "../Assets/holder.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ExploreCard = (props) => {
  return (
    <>
      <div
        align="center"
        class="float-left"
        style={{ margin: "20px 0", fontWeight: "bold" }}
      >
        <div style={{ margin: "0 40px", display: "flex" }}>
          <Card style={{ width: "24rem" }}>
            {console.log(props.img)}
            <Card.Img variant="top" src={props.img === null ? image2:props.img} />
            <Card.Body>
              <h4>{props.event.eventName}</h4>
              <Card.Text>
                Date : {props.event.eventDate} <br />
                Location : {props.event.venue},{props.event.city} <br />
                Time : {props.event.time} <br/>
                Number of Seats: {props.event.noOfSeats}
              </Card.Text>
              <Link to={"/details/" + props.event.id}>
              <Button
              type="button"
              class="btn m-3"
              style={{
                backgroundColor: "black",
                fontWeight: "bold",
                borderRadius: "0",
                color: "white",
                width: "140px",
              }}
            >View Details</Button>
                &nbsp;&nbsp;
              </Link>
              <Button
              type="button"
              class="btn m-3"
              style={{
                backgroundColor: "black",
                fontWeight: "bold",
                borderRadius: "0",
                color: "white",
                width: "140px",
              }}
            >Book Ticket</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ExploreCard;
