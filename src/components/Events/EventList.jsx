import React, { useEffect, useState } from "react";

import classes from "../../styles/EventList.module.css";
import EventItem from "./EventItem";

import { getAllEvents } from "../../dummyData";

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
