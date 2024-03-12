import React from "react";
import Card from "./Card";
import Contacts from "../contacts";
import Avatar from "./Avatar";
import Emojipedia from "../Emojipedia";


const emojis = Emojipedia.map(emoji => {
    return {
        ...emoji,
        meaning: emoji.meaning.substring(0, 100)
    };
});

function CreatedCard(emoji) {
    return (
        <Card 
      
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
            {emojis.map(CreatedCard)}
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