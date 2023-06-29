import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Liste from "./components/Liste";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import Characteristic from "./components/Characteristic";
import Analyse from "./components/Analyse";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Characteristic />
      <Liste />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Analyse" element={<Analyse />} />
        <Route path="/phones/:id" element={<Analyse />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
