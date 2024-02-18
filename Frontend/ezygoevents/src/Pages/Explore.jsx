import React from 'react';
import ExploreCard from '../Componants/ExploreCardSection/ExploreCard';


const Explore = ({ }) => {
  const component =  (
    <>
        <div>
              <div className='Explore-header' >
              <h2 style={{textAlign: 'center'}}>
                  Explore the best events <br />happening around you
              </h2>
                </div >
            
            
        <div>
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
        </div>
        
    </div>
    </>
  );
  return component;
};


export default Explore;