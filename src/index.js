import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();
const customStyle = {
  color: ""
};

let greeting;

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "blue";
} else {
  greeting = "Good Evening";
  customStyle.color = "green";
}

ReactDOM.render(
  <h1 style={customStyle}>{greeting}</h1>,
  document.getElementById("root")
);
