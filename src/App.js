import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import EventList from "./components/Events/EventList";

const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/events/:id" element={<h1>Event by id</h1>} />
        <Route path="/AddEvents" element={<h1>Add Event Form</h1>} />
      </Routes>
    </main>
  );
};

export default App;
