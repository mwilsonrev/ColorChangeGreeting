//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

// get the current Time
const date = new Date();
const hour = date.getHours();
console.log(hour);

let greeting = "Good Morning";
let color = {
  color: "red"
};

if (hour > 12 && hour < 18) {
  (greeting = "Good Afternoon"), (color = { color: "green" });
} else {
  if (hour > 17 && hour <= 24) {
    (greeting = "Good Evening"), (color = { color: "blue" });
  } else {
    greeting = "Good Morning";
  }
}

// if the time is betwee 12PM and 6PM  Good Afternoon in green
// else if ( between 6PM and midnight we good evening)

ReactDOM.render(
  <h1 style={color}>{greeting}</h1>,
  document.getElementById("root")
);

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
