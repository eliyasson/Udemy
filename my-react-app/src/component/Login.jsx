import React, { useState } from "react";
import { ReactDOM } from "react";

const currentTime = new Date().toLocaleTimeString();

function Login() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    function getTime() {
        const currentTime = new Date().toLocaleTimeString();
        setTime(currentTime);
    }
    function sayHi() {
        
    }
    
    return (
        <div className="container">
            <h2>{time}</h2>
            <h2>{time}</h2>
            <button onClick={getTime}>Get Time</button>
            <form className="form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login; 