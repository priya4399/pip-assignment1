import Carouselbanner from "./Components/Carouselbanner";
import "./App.css";
// import { TextField } from '@mui/material';
import Navbar from "./Components/Navbar";
import Events from "./events.json";
import Event from "./Components/event";
// import {useState} from "react";
// import Home from './Components/Home';
function App() {
  // const filteredUpcomingData = Events.filter(d => new Date(d.event_date_time) > new Date());
  const filteredRecentData = Events.filter(
    (d) => new Date(d.event_date_time) < new Date()
  );
  // console.log("filterUpcomingData:",filteredUpcomingData);
  console.log("filterRecentData:", filteredRecentData);
  // const[query,setQuery]= useState(" ");

  return (
    <div>
      <Navbar title="Sport Event" about="About Us" />
      <Carouselbanner />

      {/* <div className="search">
        <TextField id="outlined-basic" variant="outlined" html="Search" onChange={event => setQuery(event.target.value)}/>
      </div> */}
      <div className="container my-5">
        {/* <div className="App-header">   */}
        {/* <Home /> */}
        <div className="sub-container my-10 mx-10">
          <h1>Upcoming Events</h1> <br />
          {/* <div className="inner">
      
      {
        filteredUpcomingData && filteredUpcomingData.map(filteredUpcomingData => {
          return(
            <div className="box" key={filteredUpcomingData.id}>
              {/* if ({!Events.matchStarted==true})  */}
          {/* <img src={filteredUpcomingData.image} />
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
    </div> */}
          <Event />
        </div>
      </div>
      <div className="container my-5">
        {/* <div className="App-header">   */}
        {/* <Home /> */}
        <div className="sub-container my-10 mx-10">
          <h1>Recent Events</h1> <br />
          <div className="event-parent-box">
            {filteredRecentData &&
              filteredRecentData.map((filteredRecentData, idx) => {
                return (
                  <div
                    style={{
                      margin: "1rem",
                      position: "relative",
                    }}
                    className={(idx + 1) % 7 == 0 ? "event-child-special" : ""}
                    key={filteredRecentData.id}
                  >
                    <img src={filteredRecentData.image} />
                    <div className="event-data">
                      <strong>{filteredRecentData.type}</strong>
                      <br />
                      {filteredRecentData.description}
                      <br />
                      {filteredRecentData.event_date_time}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
