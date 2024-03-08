import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Card(props) {
  return (
  <div>
    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
  </div>
);
}

function Contact(props) {
  return ( 
    <div>
      <h3>{props.name}</h3>

    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card 
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 4567 909"
      email="b@gmail.com"
    />
    <Contact 
      name="Ruth"/>
  </div>,

  document.getElementById("root")
);
