import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import adminService from '../../Services/adminService';

const AllEvents = () => {<Sidebar/>
const [eventarr,setEventArr] = useState([]);

const [checked,setChecked] = useState(false);

const fetchData = ()=>{
    adminService.getAllEvents().then(
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


  return (
    <div>
      <Sidebar/>
      {eventarr.map(e=> <div class="card bg-light mb-3 mt-3">
  <div class="card-body d-flex justify-content-around" key={e.id}>
    <div >{e.eventName}</div>
    <div>{e.venue},{e.city}</div>
    <div>{e.eventDate}</div>
    <div>{e.price}</div>
    <div>{e.status}</div>
    <div>{e.category}</div>
    <div>
      
      <input type='checkbox' name="check" id='check' onChange={(event)=>{
      if(event.target.checked && e.status === "PENDING"){
          adminService.setStatus(e.id);
          setChecked(true);
      }
    }} 
    ></input></div>
  </div>
</div>)}
    </div>
  )
}

export default AllEvents
