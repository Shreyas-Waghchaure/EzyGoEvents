import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ExploreCard from '../Componants/ExploreCardSection/ExploreCard';
import ExploreService from '../Services/ExploreService';

const EventOfCategory = () => {

    const[eventarr,setEventArr] = useState([]);
    const param = useParams();
  const fetchData = ()=>{
    ExploreService.getByCategory(param.cat).then(
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
        <div>
        {eventarr.map(e=>
        e.status === "CONFIRMED"?<ExploreCard key={e.id} event={e} img={`./images/${e.imagePath.split('/').pop()}`} getData={fetchData} />:"")}
        </div>
        
    </div>
    </>
  );
  return component;
}

export default EventOfCategory