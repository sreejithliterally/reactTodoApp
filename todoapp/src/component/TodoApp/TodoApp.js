import React, { Component } from 'react'
import "./TodoApp.css";

export class TodoApp extends Component {

    state={
        input:"",
        items:[]

    }

    handleChange=event=>{
        this.setState({
            input:event.target.value
        })
    }

    storeItems=(event)=>{
        event.preventDefault();

        const {input} =this.state
        //const allItems = this.state.items;
        //allItems.push(input);
        
        this.setState({
            //items: allItems
            items:[...this.state.items, input]
        })
        }

        
    
    render() {
        const{input, items}= this.state;
        
        return (
            <div className="todo-container">

                <div className="input-box"><h1>Todo App</h1>
                    
              
                
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
                <div className="list-container">
                <ul>
                    {items.map((data, index)=>(
                        <li key={index}>{data} <i className="fa fa-trash" aria-hidden="true"></i></li>
                    ))}
    
                </ul>
                </div>
            </div>

        )
    }
}

export default TodoApp;