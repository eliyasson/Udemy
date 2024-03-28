import React, { useState } from "react";
import { ReactDOM } from "react";

const now = new Date().toLocaleTimeString();
function Login() {
    const [time, setTime] = useState(now);

    function getTime() {
        const now = new Date().toLocaleTimeString();
        setTime(now);
    }
    setInterval(getTime, 1000);
    return (
        <div className="container">
           <h1>{time}</h1>
            <form className="form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;