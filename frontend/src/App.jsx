import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Liste from "./components/Liste";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import "./App.scss";

import FilterBar from "./components/FilterBar";

function App() {
  return (
    <div className="App">
      <Nav />
      <FilterBar />
      <Liste />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
