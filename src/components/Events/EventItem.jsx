import React from "react";
import AddressIcon from "../icons/address-icon";
import ArrowIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";

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
        <h2>{event.title}</h2>
        <div className={classes.date}>
          <DateIcon />
          <time>{readAbleDate}</time>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
