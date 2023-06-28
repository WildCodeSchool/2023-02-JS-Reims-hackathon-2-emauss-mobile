import React from "react";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Liste from "./components/Liste";
import Footer from "./components/Footer";
import "./App.scss";

import FilterBar from "./components/FilterBar";

function App() {
  return (
    <div className="App">
      <Nav />
      <FilterBar />
      <Login />
      <Liste />
      <Footer />
    </div>
  );
}

export default App;
