import React from "react";

const EventRegister = () => {
  return (
    <div>
      <NavLink to={"/"}>
        <div className="pt-3 pl-4">
          <FaArrowLeft></FaArrowLeft>
          <span className="ml-2">Back to Homepage</span>
        </div>
      </NavLink>
    </div>
  );
};

export default EventRegister;
