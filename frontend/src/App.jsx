import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Liste from "./components/Liste";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import Characteristic from "./components/Characteristic";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Characteristic />
      <Liste />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
