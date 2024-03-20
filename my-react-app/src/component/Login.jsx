import React from "react";
import Input from "./Input";

const currentTime = new Date().getHours();

function Greatings() {
    return currentTime < 12 ? <h2>Good Morning!</h2> : <h2>Good afternoon!</h2>
}

function registerForm() {
    return (
        <form className="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
        </form>
      );
}

const isLoggedIn = false ? <h1>{registerForm()}</h1> :  <Input />;
function Login() {
    return (
        <div className="container">
            {Greatings()}
            {isLoggedIn} 
        </div>
    )
}
export default Login;