import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

const App = (props) => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default App;
