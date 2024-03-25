import React from "react";

const currentTime = new Date().getHours();

function Greatings() {
    return currentTime < 12 ? <h2>Good Morning!</h2> : <h2>Good afternoon!</h2>
}

function strike() {
    document.getElementById("root").style.textDecoration = "line-through"
}
function unStrike() {
    document.getElementById("root").style.textDecoration = null;
}

function Login() {
    const isLoggedIn = true;

    return (
        <div className="container">
            <p>Buy house</p>
            <button onClick={strike}>Change to strike through</button>
            <button onClick={unStrike}>Change back</button>
            <h2>{Greatings()}</h2>
            <form className="form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                {!isLoggedIn && <input type="password" placeholder="Confirm Password" />}
                <button type="submit">{isLoggedIn  ? "Login" :  "Register" }</button>
            </form>
        </div>
    )
}
export default Login;