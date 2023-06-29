import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import "./App.scss";
import Phones from "./Pages/Phones";

function App() {
  return (
    <div className="App">
      <Nav />
      <Phones />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
