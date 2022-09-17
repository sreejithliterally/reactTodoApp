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

    deleteItem=key=>{
      /* const allItems = this.state.items;
      allItems.splice(key,1);
      this.setState({
          items:allItems
      }) */
      this.setState({
          items: this.state.items.filter((data, index)=> index!==key)
      })
    }

    storeItems=(event)=>{
        event.preventDefault();
        const {input} =this.state
        //const allItems = this.state.items;
        //allItems.push(input);
        
        this.setState({
            //items: allItems
            items:[...this.state.items, input],
            input:""
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
                        <li key={index}>{data} <i className="fa fa-trash" onClick={()=> this.deleteItem(index)} aria-hidden="true"></i></li>
                    ))}
    
                </ul>
                </div>
            </div>

        )
    }
}

export default TodoApp;