import React from "react";
import Input from "./Input";

const isLoggedIn = false;

function renderConditionally() {
   
    if (isLoggedIn === true){
        return <h1>Hello</h1>
    } else {
        return <Input />
    };

}
function Login() {
    return (
        <div className="container">
            {renderConditionally()} 
        </div>
    )
}
export default Login;