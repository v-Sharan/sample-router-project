import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import EventList from "./components/Events/EventList";
import Event from "./components/Events/Event";
import AddEventForm from "./components/Events/AddEventForm";
import EditForm from "./components/Events/EditForm";

const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/events/:EventId" element={<Event />} />
        <Route path="/AddEvent" element={<AddEventForm />} />
        <Route path="/edit/:EventId" element={<EditForm />} />
      </Routes>
    </main>
  );
};

export default App;
