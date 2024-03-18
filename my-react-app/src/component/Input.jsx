import React from "react";


function Input() {
    return (
        <form className="form">
            <input type="text" placeholder="Username"></input>
            <input type="text" placeholder="Password"/>
            <button type="submit">Login</button>
        </form>
    )
}
export default Input;