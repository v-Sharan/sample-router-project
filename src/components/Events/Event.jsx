import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import classes from "../../styles/Event.module.css";

import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import { getEventById } from "../../dummyData";

const Event = () => {
  const { EventId } = useParams();

  const event = getEventById(EventId);

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
