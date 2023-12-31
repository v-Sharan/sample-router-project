import React, { useState } from "react";
import classes from "../../styles/form.module.css";
import Button from "../UI/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEventForm = () => {
  const navigation = useNavigate();
  const [form, setForm] = useState({
    title: "",
    discription: "",
    location: "",
    date: "",
    image: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://moviedatabase-c8855-default-rtdb.asia-southeast1.firebasedatabase.app/event.json",
        form
      )
      .then((res) => navigation("/"))
      .catch((err) => console.log(err));
  };

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
        <Button>Add Event</Button>
      </div>
    </form>
  );
};

export default AddEventForm;
