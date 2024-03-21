import React from "react";

const currentTime = new Date().getHours();

function Greatings() {
    return currentTime < 12 ? <h2>Good Morning!</h2> : <h2>Good afternoon!</h2>
}


function Login(props) {
    return (
        <div className="container">
            <h2>{Greatings()}</h2>
            <form className="form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                {props.isLoggedIn && <input type="password" placeholder="Confirm Password" />}
                
                <button type="submit">{props.isLoggedIn ?  "Register" : "Login"}</button>
            </form>
        </div>
    )
}
export default Login;