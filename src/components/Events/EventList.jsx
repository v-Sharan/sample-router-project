import React, { useEffect, useState } from "react";
// import { getAllEvents } from "../../dummyData";

import classes from "../../styles/EventList.module.css";
import EventItem from "./EventItem";

const EventList = () => {
  // const events = getAllEvents();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getAllEvents = async () => {
      const response = await fetch("http://localhost:8000");
      const Data = await response.json();
      setEvents(Data);
    };

    getAllEvents();
  }, []);

  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem event={event} key={`${event.id}`} />
      ))}
    </ul>
  );
};

export default EventList;
