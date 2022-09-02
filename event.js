import React from 'react';
import Events from '../events.json';
import '../App.css';



const filteredUpcomingData = Events.filter(d => new Date(d.event_date_time) > new Date());
//   const filteredRecentData = Events.filter(d => new Date(d.event_date_time) < new Date());
  console.log("filterUpcomingData:",filteredUpcomingData);
//   console.log("filterRecentData:",filteredRecentData);
  function event(){

  return (    <div>
      
    {
      filteredUpcomingData && filteredUpcomingData.map(filteredUpcomingData => {
        return(
          <div className="box" key={filteredUpcomingData.id}>
              <img src={filteredUpcomingData.image} />
            <br />
            <strong>
            {
              filteredUpcomingData.type

            }
            </strong>
            <br />
            {
              filteredUpcomingData.description
            }
            <br />
            {
              filteredUpcomingData.event_date_time
            }          
        
          
          </div>
        )
      })
    }
  </div>);


  
};

export default event;