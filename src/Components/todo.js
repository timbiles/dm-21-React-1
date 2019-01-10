import React, { Component } from 'react';

import '../App.css';

class Todo extends Component {
    constructor(){
        super()
        this.state = {
            listItem: '',
            list: [],
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleInput(e){
        this.setState({listItem: e})
    }

    handleClick(){
        let arr = this.state.list

        arr.push(this.state.listItem)
        this.setState({list: arr})
    }

    render(){
        console.log(this.state)
        return(
            <div className='todo'>
                <h1>Todo list</h1>
                <div>
                    <input 
                        type='text'
                        onChange={(e) => this.handleInput(e.target.value)}
                    />
                    <button
                        onClick={()=> this.handleClick()}
                    >
                        Add
                    </button>
                </div>
                {this.state.list.map((e,i) => {
                    return (
                        <p key={i}>{e}</p>
                    )
                })}
            </div>
        )
    }
}

export default Todo;