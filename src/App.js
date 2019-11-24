import React from "react";
import "./App.css";
import "./kvass.css";
import Cards from "./Cards";
import Heading from "./Heading";

function App() {
  return (
    <div className="wrapper">
      <div className="col-fl-md-12">
        <Heading />
      </div>
      <div className="col-fl-md-12">
        <div className="whole">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
