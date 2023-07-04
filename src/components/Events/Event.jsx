import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import classes from "../../styles/Event.module.css";
// import { getEventById } from "../../dummyData";

import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";

const Event = () => {
  const { EventId } = useParams();
  const [event, setEvent] = useState({});
  // const event = getEventById(EventId);

  useEffect(() => {
    const getByID = async () => {
      const response = await fetch(`http://localhost:8000/${EventId}`);
      const Data = await response.json();
      setEvent(Data);
      console.log(Data);
    };
    getByID();
  }, []);

  if (!event) {
    // no event found
    return <p>No Event</p>;
  }

  const readAbleDate = new Date(event.date).toLocaleDateString("en-us", {
    date: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <section className={classes.summary}>
        <h1>{event.title}</h1>
      </section>
      <section className={classes.logistics}>
        <div className={classes.image}>
          <img src={event.image} alt={event.title} />
        </div>
        <ul className={classes.list}>
          <li className={classes.item}>
            <span className={classes.icon}>
              <DateIcon />
            </span>
            <span>
              <time>{readAbleDate}</time>
            </span>
          </li>
          <li className={classes.item}>
            <span className={classes.icon}>
              <AddressIcon />
            </span>
            <span>{event.location}</span>
          </li>
        </ul>
      </section>
      <div className={classes.content}>{event.description}</div>
    </>
  );
};

export default Event;
