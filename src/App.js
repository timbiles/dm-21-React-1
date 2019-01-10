import React, { Component } from 'react';
import './App.css';
import Image from './Components/new';
import Bio from './Components/bio.js';
import Todo from './Components/todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({username: e.target.value})
  }

  // handleChange = (e) => {

  // }

  handleChange2(e) {
    this.setState({password: e.target.value})
  }

  handleClick() {
    let {username, password} = this.state

    if(username === 'TimBiles' && password === 'password') {
      window.alert('Login Successful!')
    } else {
      window.alert('Access Denied. DangEr Will RobiNson!')
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => this.handleChange(e)}
        />
        <input
          type="password" 
          placeholder="Password" 
          onChange={(e) => this.handleChange2(e)}
        />
        <button onClick={() => this.handleClick()}>Login</button>
        {/* <h4>Username = </h4>
        <p>{this.state.username}</p>
        <h4>Password = </h4>
        <p>{this.state.password}</p> */}
        <Image />
        <Bio />
        <Todo />
      </div>
    );
  }
}

export default App;
