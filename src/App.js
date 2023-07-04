import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import EventList from "./components/Events/EventList";
import Event from "./components/Events/Event";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, incrementPayload } from "./store/CounterSclice";
import Button from "./components/UI/button";

const App = () => {
  const value = useSelector((state) => state.number.value);
  const dispatch = useDispatch(); //only accessible by slice

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/events/:EventId" element={<Event />} />
        <Route path="/AddEvent" element={<h1>Add Event Form</h1>} />
      </Routes>
    </main>
  );
};

export default App;
