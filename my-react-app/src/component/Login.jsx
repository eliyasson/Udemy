import React, { useState } from "react";
import { ReactDOM } from "react";


function Login() {
    const [headingText, setHeadingText] = useState("Hello");
    const [isMousedOver, setMouseOver] = useState(false);

    const [name, setName] = useState("")

    function handleClick() {
        setHeadingText();
    }
    function handleMouseOver() {
        setMouseOver(true);
    }
    function handleMouseOut() {
        setMouseOver(false);
    }
    function handleChange(event) {
        
        setName(event.target.value)
    }

    return (
        <div className="container">
             <h1>{headingText} {name}</h1>
            <input onChange={handleChange} type="text" placeholder="What's your name?" />
         
            <form className="form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button style={{backgroundColor: isMousedOver ? 'black' : 'white'}} 
                    onClick={handleClick} 
                    onMouseOver={handleMouseOver} 
                    onMouseOut={handleMouseOut} type="submit">Login
                </button>
            </form>
        </div>
    )
}
export default Login;