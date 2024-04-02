import React, { useState } from "react";
import { ReactDOM } from "react";


function Login() {
    const [headingText, setHeadingText] = useState("Hello");
    const [isMousedOver, setMouseOver] = useState(false)

    function handleClick() {
        setHeadingText();
    }
    function handleMouseOver() {
        setMouseOver(true);
    }
    function handleMouseOut() {
        setMouseOver(false);
    }

    return (
        <div className="container">
             <h1>{headingText}</h1>
            <input type="text" placeholder="What's your name?" />
         
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