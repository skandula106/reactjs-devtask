import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// two types elements creation in react js with jsx and without jsx, with jsx need compilation with babel
// and without jsx we completley write in pure javascript

// Createing react element using jsx
const elementSWithJsx = (
  <div className="textClass">
    <p className="text-right">Understanding reactjs elements with jsx</p>
    <h1>Started learning react js </h1>
  </div>
);
// Createing react element using without jsx
const elememntWithOutJsx = React.createElement(
  "div",
  { className: "textClass" },
  React.createElement("p", null, "Understanding reactjs without jsx"),
  React.createElement("h1", null, "Started learning react js")
);

ReactDOM.render(elementSWithJsx, document.getElementById("root"));
ReactDOM.render(elememntWithOutJsx, document.getElementById("newElement"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
