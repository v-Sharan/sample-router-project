import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/events/:id" element={<h1>Event by id</h1>} />
      </Routes>
    </main>
  );
};

export default App;
