import React from "react";
import holder from "../Assets/holder.jpg";

const Card = () => {
  return (
    <div className="card">
      <img className="card-img-top" src={holder} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
      <div className="card-btn">
          <button
            type="button"
            class="btn m-3"
            style={{
              backgroundColor: "black",
              fontWeight: "bold",
              borderRadius: "0",
              color: "white",
              width: "140px",
            }}
          >
            See Details
          </button>
        </div>
    </div>
  );
};

export default Card;
