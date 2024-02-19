import React, { useEffect, useState } from 'react';
import ExploreCard from '../Componants/ExploreCardSection/ExploreCard';
import ExploreService from '../Services/ExploreService';


const Explore = () => {

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

  const component =  (
    <>
        <div>
              <div className='Explore-header mt-5' >
              <h2 style={{textAlign: 'center'}}>
                  Explore the best events happening <br />around you
              </h2>
                </div >            
        <div className='d-flex justify-content-around mt-4'>
        {eventarr.map(e=>
        e.status === "CONFIRMED"?<ExploreCard key={e.id} event={e} getData={fetchData} />:<h6 align="center">No Event Avilable</h6>)}
        </div>
        
    </div>
    </>
  );
  return component;
};


export default Explore;