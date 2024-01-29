import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {addition, subtraction} from './calculator';

ReactDOM.render(
  <ul>
    <li>{addition(99, 9)}</li>
    <li>{subtraction(99, 9)}</li>
  </ul>
,document.getElementById("root"));