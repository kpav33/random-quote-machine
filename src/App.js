import "./App.css";

import React from "react";

import Quote from "./components/Quote";
import Buttons from "./components/Buttons.js";

function App() {
  return (
    <div id="wrapper">
      <div id="quote-box">
        <Quote />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
