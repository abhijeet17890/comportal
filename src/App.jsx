import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import MHeader from "mheader/Header";
import MContent from "container/Content";
import MFooter from "mfooter/Footer";

const App = () => (
  <div className="container">
    <h1> Company portal </h1>
    <MHeader />
    <MContent />
    <MFooter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
