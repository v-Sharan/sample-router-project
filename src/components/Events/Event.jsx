import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import classes from "../../styles/Event.module.css";
import Button from "../UI/button";

import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";

const Event = () => {
  const { EventId } = useParams();
  const [event, setEvent] = useState([]);
  const navigation = useNavigate();

  const fetchDataById = (id) => {
    axios
      .get(
        `https://moviedatabase-c8855-default-rtdb.asia-southeast1.firebasedatabase.app/event/${id}.json`
      )
      .then((data) => setEvent(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (EventId) {
      //true
      fetchDataById(EventId);
    }
  }, [EventId]);

  if (!event) {
    // no event found
    return <p>No Event</p>;
  }

  const handleDelete = (id) => {
    axios
      .delete(
        `https://moviedatabase-c8855-default-rtdb.asia-southeast1.firebasedatabase.app/event/${id}.json`
      )
      .then((res) => navigation("/"))
      .catch((err) => console.log(err));
  };

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Button onClick={() => navigation(`/edit/${EventId}`)}>Edit</Button>
        <Button
          onClick={() => {
            const permission = window.confirm("Are you sure want to delete");
            if (permission) {
              handleDelete(EventId);
            }
          }}
        >
          Delete
        </Button>
      </div>
      <div className={classes.content}>{event.discription}</div>
    </>
  );
};

export default Event;
