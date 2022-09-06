import React from "react";
import Events from "../events.json";
import "../App.css";

const filteredUpcomingData = Events.filter(
  (d) => new Date(d.event_date_time) > new Date()
);
const filteredRecentData = Events.filter(
  (d) => new Date(d.event_date_time) < new Date()
);

console.log("filterUpcomingData:", filteredUpcomingData);
  console.log("filterRecentData:", filteredRecentData);

function event() {
  return (<>
  <div className="container my-5">
  <div className="sub-container my-10 mx-10">
    <div className="upcoming" >
          <h1>Upcoming Events</h1> <br /></div>
    <div className="event-parent-box">
      {filteredUpcomingData &&
        filteredUpcomingData.map((filteredUpcomingData, idx) => {
          return (
            <div
              style={{
                margin: "1rem",
                position: "relative"
              }}
              className={(idx + 1) % 7 === 0 ? "event-child-special" : ""}
              key={filteredUpcomingData.id}
            >
              <img src={filteredUpcomingData.image} />
              <div className="event-data">
                <strong>{filteredUpcomingData.type}</strong>
                <br />
                {filteredUpcomingData.description}
                <br />
                {filteredUpcomingData.event_date_time}
              </div>
            </div>
          );
        })}
    </div>
    </div>
    </div>
    <div className="container my-5">
    <div className="sub-container my-10 mx-10">
    <div className="recent" >
          <h1>Recent Events</h1> <br /> </div>
<div className="event-parent-box">
{filteredRecentData &&
  filteredRecentData.map((filteredRecentData, idx) => {
    return (
      <div
        style={{
          margin: "1rem",
          position: "relative",
        }}
        className={(idx + 1) % 7 === 0 ? "event-child-special" : ""}
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
</>
  );
}

export default event;
