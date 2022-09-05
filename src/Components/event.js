import React from "react";
import Events from "../events.json";
import "../App.css";

const filteredUpcomingData = Events.filter(
  (d) => new Date(d.event_date_time) > new Date()
);

console.log("filterUpcomingData:", filteredUpcomingData);

function event() {
  return (
    <div className="event-parent-box">
      {filteredUpcomingData &&
        filteredUpcomingData.map((filteredUpcomingData, idx) => {
          return (
            <div
              style={{
                margin: "1rem",
                position: "relative"
              }}
              className={(idx + 1) % 7 == 0 ? "event-child-special" : ""}
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
  );
}

export default event;
