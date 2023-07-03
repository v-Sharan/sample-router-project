import React from "react";
import { getAllEvents } from "../../dummyData";

import classes from "../../styles/EventList.module.css";
import EventItem from "./EventItem";

const EventList = () => {
  const events = getAllEvents();
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem event={event} key={`${event.id}`} />
      ))}
    </ul>
  );
};

export default EventList;
