import React from "react";
import Card from "./Card";
import Contacts from "../contacts";
import Avatar from "./Avatar";
import Emojipedia from "../Emojipedia";

function CreatedCard(emoji) {
    return (
        <Card 
            id={emoji.id}
            key={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
        />
    )
}

function App() {
    return (
    <div>
        <h1>
            <span>emojipedia</span>
        </h1>
        <dl className="dictionary">
            {Emojipedia.map(CreatedCard)}
        </dl>
        
    
    </div>

        /* <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar 
                img={Contacts[3].imgURL}
            
            />
            {Contacts.map(CreatedCard)}
        </div> */
    )
}
export default App;