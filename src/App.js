import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          id: 1,
          title: "Hello, React!",
          desc: "React",
          done: false
        },
        {
          id: 2,
          title: "Hello, Redux!",
          desc: "Reduxこんにちは",
          done: false
        },
      ]
    }
  }

  render() {
    return (
      <div className="app">
        <h1>todoアプリを作ってみた</h1>
        <TodoList
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
