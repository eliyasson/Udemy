import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Eliyas';
const randNum = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    <h3>Hey {name}! </h3>
    <p>Your lucky number is {randNum}</p>
  </div>, 
    document.getElementById("root"));
