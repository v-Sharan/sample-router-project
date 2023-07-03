import React from "react";
import AddressIcon from "../icons/address-icon";
import ArrowIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";

import Button from "../UI/button";

import classes from "../../styles/EventItem.module.css";

const EventItem = ({ event }) => {
  const readAbleDate = new Date(event.date).toLocaleDateString("en-us", {
    date: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li className={classes.item}>
      <img src={event.image} alt={event.title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{event.title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{readAbleDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{event.location}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${event.id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
