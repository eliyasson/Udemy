import React, { useState } from "react";


function Login() {
    
    const [fullName, setFullName] = useState({
        fname: "",
        lname: ""
    });


    function handleChange(event) {
        const newValue = event.target.value;
        const inputName = event.target.name;

        if (inputName === "fname") {
            setFullName({ fname: newValue})
        } else if ( inputName === "lname") {
            setFullName( { lname: newValue});
        }
    }
 

    return (
        <div className="container">
            <h1>Todo List</h1>
            <h2>Hello, {fullName.fname} {fullName.lname}</h2>
            <form  className="form">
                <input 
                    name="fname" 
                    onChange={handleChange}  type="text" 
                    placeholder="First Name" 
                    value={fullName.fname}
                />

                <input 
                    onChange={handleChange} 
                    name="lname" type="text" 
                    placeholder="Last Name" 
                    value={fullName.lname}
                />

                <button type="submit">Submit</button>
            </form>
            
           
        </div>
    )
}
export default Login;