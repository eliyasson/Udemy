import React from "react";
import Input from "./Input";

const isLoggedIn = false ? renderConditionally() : loginForm();

function renderConditionally() {
    return <h1>Hello</h1>
} 
function loginForm() {
    return <Input />
}

function Login() {
    return (
        <div className="container">
            {isLoggedIn} 
        </div>
    )
}
export default Login;