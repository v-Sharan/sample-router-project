import React, { useEffect, useState } from "react";

import classes from "../../styles/EventList.module.css";
import EventItem from "./EventItem";
import axios from "axios";

import { getAllEvents } from "../../dummyData";

const EventList = () => {
  // const events = getAllEvents();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fectData = async () => {
      const res = await axios.get(
        "https://moviedatabase-c8855-default-rtdb.asia-southeast1.firebasedatabase.app/event.json"
      );
      console.log(res);
    };
    fectData();
  }, []); //-> data fetching

  return (
    <ul className={classes.list}>
      {events.length > 0 &&
        events.map((event) => <EventItem event={event} key={`${event.id}`} />)}
    </ul>
  );
};

export default EventList;
