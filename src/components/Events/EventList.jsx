import React, { useEffect, useState } from "react";

import classes from "../../styles/EventList.module.css";
import EventItem from "./EventItem";
import axios from "axios";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fectData = () => {
      setLoading(true);
      axios
        .get(
          "https://moviedatabase-c8855-default-rtdb.asia-southeast1.firebasedatabase.app/event.json"
        )
        .then((data) => {
          let Events = [];
          for (const key in data.data) {
            Events.push({
              id: key,
              title: data.data[key].title,
              location: data.data[key].location,
              discription: data.data[key].discription,
              date: data.data[key].date,
              image: data.data[key].image,
            });
          }
          setEvents(Events);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    };
    fectData();
  }, []); //-> data fetching

  return (
    <ul className={classes.list}>
      {events.length > 0 &&
        events.map((event) => <EventItem event={event} key={`${event.id}`} />)}
      {loading && <p>Loading...</p>}
    </ul>
  );
};

export default EventList;
