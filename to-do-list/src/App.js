import React from 'react';
import './App.css';
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      data: todosData
    }
  }

  render(){

    const todoComponents = this.state.data.map(function(item){
      return <TodoItem todo={item}/>;
    })

    return (
      <div className="todo-list">
          {todoComponents}
      </div>
    );
  }

}

export default App;
