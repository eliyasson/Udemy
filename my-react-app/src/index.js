import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const date = new Date();
const year = date.getFullYear();
const time = date.getHours();

let greatings;
if (time < 12) {
  greatings = 'Good Morning';
} else if (time >= 12  && time < 17 ) {
  greatings = 'Good Afternoon';
} else {
  greatings = 'Good Evening';
}

ReactDOM.render(
  <>
    <p>{greatings}</p>
    <p>current date: {year}</p>
    <p>current time: {time}</p>
  </>
,document.getElementById("root"));