import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "Eliyas";
const currentDate = new Date();
const year = currentDate.getFullYear();

const customeStyle = {
  color: "red",
  fontsize: "20px",
  border: "1px solid black"
};

ReactDOM.render(
  <>
    <p style={customeStyle}>Created by {name}</p>
    <p>Copyright {year}</p>
    
  </>, 
    document.getElementById("root"));
