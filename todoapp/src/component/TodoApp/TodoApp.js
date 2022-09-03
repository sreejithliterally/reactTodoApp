import React, { Component } from 'react'
import "./TodoApp.css";

export class TodoApp extends Component {
    render() {
        return (
            <div className="todo-container">

                <div className="input-box"><h1>Todo App </h1>
                <input type= 'text'/>
                <button>Add</button>
                </div>

                <ul>
                    <li>Items</li>
                </ul>
            </div>

        )
    }
}

export default TodoApp;