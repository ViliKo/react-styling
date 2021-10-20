import React from "react";
import ReactDom from "react-dom";

const dateTime = new Date();
const dateTimeFound = Number(dateTime.getHours());
let textString = "";
let customStyle;

if (dateTimeFound >= 5 && dateTimeFound < 12) {
  textString = "Good Morning";
  customStyle = { color: "red" };
} else if (dateTimeFound >= 12 && dateTimeFound < 18) {
  textString = "Good Afternoon";
  customStyle = { color: "green" };
} else if (
  (dateTimeFound >= 18 && dateTimeFound < 23) ||
  (dateTimeFound >= 0 && dateTimeFound < 5)
) {
  textString = "Good Evening";
  customStyle = { color: "blue" };
}

ReactDom.render(
  <h1 className="heading" style={customStyle}>
    {textString}
  </h1>,
  document.getElementById("root")
);

//Create a React app from scratch.

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
