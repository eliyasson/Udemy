import React, { useState } from "react";


function Login() {
    const [list, setList] = useState("");
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    function handleChange(event) {
        setList(event.target.value);
    }

    function handleClick(event) {
        setTodos(prevTodos => [...prevTodos, list]);
        event.preventDefault();
        setInput("");
    }

    return (
        <div className="container">
            <h1>Todo List</h1>
         
            <form onSubmit={handleClick} className="form">
                <input onChange={handleChange} type="text" placeholder="Todo list" value={list}/>
                <button type="submit">Save</button>
            </form>
            <ol>
                { todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ol>
           
        </div>
    )
}
export default Login;