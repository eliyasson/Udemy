import React from "react";

const currentTime = new Date().getHours();

function Greatings() {
    return currentTime < 12 ? <h2>Good Morning!</h2> : <h2>Good afternoon!</h2>
}

const isLoggedIn = true;

function Login() {
    return (
        <div className="container">
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