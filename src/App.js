import Carouselbanner from './Components/Carouselbanner';
import './App.css';
import { TextField } from '@mui/material';
import Navbar from './Components/Navbar';
import Playerlist from './playerlist.json';
import {useState} from "react";
// import Home from './Components/Home';
function App() {
  const filteredUpcomingData = Playerlist.filter(d => new Date(d.event_date_time) > new Date());
  const filteredRecentData = Playerlist.filter(d => new Date(d.event_date_time) < new Date());
  console.log("filterUpcomingData:",filteredUpcomingData);
  console.log("filterRecentData:",filteredRecentData);
  const[query,setQuery]= useState(" ");

  return (
    <>
    <Navbar title="Sport Event" about="About Us" />
    <div className='banner'>
   <Carouselbanner />

   </div>
   <div className="search">
        <TextField id="outlined-basic" variant="outlined" html="Search" onChange={event => setQuery(event.target.value)}/>
      </div>
    <div className="container my-5">
      {/* <div className="App-header">   */}
    {/* <Home /> */}
    <div className="sub-container my-10 mx-10">
    <h2>
    Upcoming Events
    </h2>   <br /> 
    
    <div className="inner">
      
      {
        filteredUpcomingData && filteredUpcomingData.map(filteredUpcomingData => {
          return(
            <div className="box" key={filteredUpcomingData.id}>
              {/* if ({!playerlist.matchStarted==true})  */}
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
    </div>
    </div>
    
    </div>
    <div className="container my-5">
      {/* <div className="App-header">   */}
    {/* <Home /> */}
    <div className="sub-container my-10 mx-10">
    <h2>
    Recent Events
    </h2>   <br /> 
    
    <div className="inner">
      
      {
        filteredRecentData && filteredRecentData.map(filteredRecentData => {
          return(
            <div className="box" key={filteredRecentData.id}>
              {/* if ({!playerlist.matchStarted==true})  */}
                <img src={filteredRecentData.image} />
              <br />
              <strong>
              {
                filteredRecentData.type

              }
              </strong>
              <br />
              {
                filteredRecentData.description
              }
              <br />
              {
                filteredRecentData.event_date_time
              }          
          
            
            </div>
          )
        })
      }
    </div>
    </div>
    
    </div>
    </>
  ); }


export default App;
