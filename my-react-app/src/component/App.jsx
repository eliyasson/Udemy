import React from "react";
import Card from "./Card";
import Contacts from "../contacts";
import Avatar from "./Avatar";

function CreatedCard(contact) {
    return (
        <Card 
            name={contact.name}
            img={contact.imgURL}
            phone={contact.phone}
            email={contact.email}
        />
    )
}

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar 
                img={Contacts[3].imgURL}
            
            />
            {Contacts.map(CreatedCard)}
        </div>
    )
}
export default App;