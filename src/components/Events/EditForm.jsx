import React, { useState, useEffect } from "react";
import classes from "../../styles/form.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../UI/button";
import axios from "axios";

const EditForm = () => {
  const navigation = useNavigate();
  const { EventId } = useParams();
  const [form, setForm] = useState({
    title: "",
    discription: "",
    location: "",
    date: "",
    image: "",
  });

  const fetchData = (id) => {
    axios
      .get(
        `https://moviedatabase-c8855-default-rtdb.asia-southeast1.firebasedatabase.app/event/${id}.json`
      )
      .then((data) => {
        setForm(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    console.log(form);
    axios
      .put(
        `https://moviedatabase-c8855-default-rtdb.asia-southeast1.firebasedatabase.app/event/${EventId}.json`,
        form
      )
      .then((data) => navigation("/"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (EventId) {
      fetchData(EventId);
    }
  }, [EventId]);

  const handleSubmit = () => {};

  return (
    <form className={classes.app} onSubmit={handleSubmit}>
      <div className={classes["control-group"]}>
        <div className={classes["form-control"]}>
          <label>Title:</label>
          <input
            placeholder="Title"
            value={form.title}
            onChange={(event) =>
              setForm({ ...form, title: event.target.value })
            }
            type={"text"}
            required
          />
        </div>
        <div className={classes["form-control"]}>
          <label>Discription:</label>
          <input
            placeholder="Discription"
            value={form.discription}
            onChange={(event) =>
              setForm({ ...form, discription: event.target.value })
            }
            type={"text"}
            required
          />
        </div>
        <div className={classes["form-control"]}>
          <label>Location:</label>
          <input
            placeholder="Location"
            type={"text"}
            value={form.location}
            onChange={(event) =>
              setForm({ ...form, location: event.target.value })
            }
            required
          />
        </div>
        <div className={classes["form-control"]}>
          <label>Date:</label>
          <input
            placeholder="Date"
            type={"date"}
            value={form.date}
            onChange={(event) => setForm({ ...form, date: event.target.value })}
            required
          />
        </div>
        <div className={classes["form-control"]}>
          <label>Image:</label>
          <input
            placeholder="Image"
            type={"url"}
            value={form.image}
            onChange={(event) =>
              setForm({ ...form, image: event.target.value })
            }
            required
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={handleEdit}>Save Event</Button>
      </div>
    </form>
  );
};

export default EditForm;
