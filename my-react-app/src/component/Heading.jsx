import React from "react";

function Heading() {
    const date = new Date();
    const time = date.getHours();
    
    let greatings;
    if (time < 12) {
    greatings = 'Good Morning';
    } else if (time < 18 ) {
    greatings = 'Good Afternoon';
    } else {
    greatings = 'Good Evening';
    } 
    
    return <h1 className="header">{greatings}</h1>
}




export default Heading;