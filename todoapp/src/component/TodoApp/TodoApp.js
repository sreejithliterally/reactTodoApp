import React, { Component } from 'react'
import "./TodoApp.css";

export class TodoApp extends Component {

    state={
        input:"",
        store:[]

    }

    handleChange=event=>{
        this.setState({
            input:event.target.value
        })

    storeItems=()=>{
        
    }

        
    }
    render() {
        const{input}= this.state;

        return (
            <div className="todo-container">

                <div className="input-box"><h1>Todo App </h1>
                <input type= 'text'
                value={input}
                onChange={this.handleChange}
                />

                <div className="container">
                     <div className="btn-holder">
                <button type="button"
                onClick={this.storeItems} >Click</button>
                    </div>
                </div>
                </div>

                <ul>
                    <li>Items</li>
    
                </ul>
            </div>

        )
    }
}

export default TodoApp;