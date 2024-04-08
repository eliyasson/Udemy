import React, { useState } from "react";


function Login() {
    
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email:""
    });

    function handleChange(event) {
        const {value, name} = event.target;
        
 

        setFullName(prevValue => {
           if (name === "fname") {
            return {
                fname: value,
                lname: prevValue.lname,
                email: prevValue.email
            }
           } else if(name === "lname") {
            return {
                fname: prevValue.fname,
                lname: value,
                email: prevValue.email
            }
           } else if(name === "email") {
            return {
                email: value,
                lname: prevValue.lname,
                fname: prevValue.email
            }
           }
        })
    }

    return (
        <div className="container">
            <h1>Todo List</h1>
            <h2>Hello, {fullName.fname} {fullName.lname}</h2>
            <h3>{fullName.email}</h3>
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
                <input 
                    onChange={handleChange} 
                    name="email" type="text" 
                    placeholder="Email" 
                    value={fullName.email}
                />

                <button type="submit">Submit</button>
            </form>
            
           
        </div>
    )
}
export default Login;