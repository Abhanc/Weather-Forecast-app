import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";
import Particalbackground from "./Camponents/Particalbackground";
// import { particlesJS } from 'particles.js';



function App() {


  return (
    <React.Fragment>
      <>
        <Particalbackground />
        <div className="container">
          <CurrentLocation />
        </div>
      </>
    </React.Fragment>
  );
}

export default App;
