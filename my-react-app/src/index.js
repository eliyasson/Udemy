import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import './index.css';
import Contacts from './contacts';
import Card from './Card';

ReactDOM.render(
  <>
    <App />,
    <h1 className="heading">My Contacts</h1>
    {Contacts.map(contact => (
      <Card
      key={contact.name} // Use a unique key for each contact
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
      />
    ))}

  </>,
  
  document.getElementById("root")
);
