import React from 'react';
import ReactDOM from 'react-dom';

const name = "Eliyas";
const currentDate = new Date();
const year = currentDate.getFullYear();
ReactDOM.render(
  <>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
    
  </>, 
    document.getElementById("root"));
