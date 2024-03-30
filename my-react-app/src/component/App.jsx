import React from "react";
import Card from "./Card";
import Contacts from "../contacts";
import Avatar from "./Avatar";
import Emojipedia from "../Emojipedia";
import Login from "./Login";
import Destracting from "./Destructing";


const emojis = Emojipedia.map(emoji => {
    return {
        ...emoji,
        meaning: emoji.meaning.substring(0, 100)
    };
});



function App() {
    return (
    <div>
   
        <Login />
        <Destracting />
        <h1>
            <span>emojipedia</span>
        </h1>
        <dl className="dictionary">
            {emojis.map(emoji => (
                <Card 
                    key={emoji.id}
                    emoji={emoji.emoji}
                    name={emoji.name}
                    meaning={emoji.meaning}
                />
           ))}

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