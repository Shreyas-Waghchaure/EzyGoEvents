import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import adminService from '../../Services/adminService';

const AllHosts = () => {

    const [hostarr,setHostArr] = useState([]);
    const fetchData = ()=>{
        adminService.getAllHosts().then(
          (result)=>{
            setHostArr([...result.data]);
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
    <div class="card bg-light mb-3 mt-3">
  <div class="card-body d-flex justify-content-around">
    <div>Host Name</div>
    <div>Host email</div>
    <div>Host mobile</div>
  </div>
</div>
    {hostarr.map(h=> <div class="card bg-light mb-3 mt-3">
  <div class="card-body d-flex justify-content-around">
    <div>{h.name}</div>
    <div>{h.email}</div>
    <div>{h.mobileNo}</div>
  </div>
</div>)}
   
    
    </div>
  )
}

export default AllHosts