import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ShowNavbar({ children }) {
  
    const [showNavBar,setShowNavbar]=useState(false);

    // useLocation gives the uri(/admin) the user clicks so using it you can manipulate and remove navbar of particular webpage

    const location = useLocation();

  useEffect(() => {
    console.log(location);
    if(location.pathname==='/login' || location.pathname==='/signup'|| location.pathname === "/admin/dashboard"|| location.pathname === "/admin/dashboard/hosts"|| location.pathname === "/admin/dashboard/events" ){
      setShowNavbar(false);
    } 
      
    else setShowNavbar(true)
  }, [location]);

  return <div>{showNavBar && children}</div>;
}

export default ShowNavbar;
