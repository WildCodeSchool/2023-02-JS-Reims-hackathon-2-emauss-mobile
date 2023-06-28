import React from "react";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Liste from "./components/Liste";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Login />
      <Liste />
      <Footer />
    </div>
  );
}

export default App;
