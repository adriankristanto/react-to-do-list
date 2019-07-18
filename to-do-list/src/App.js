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
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(id){
    this.setState(
      function(prev){
        // const obj = prev;
        // assuming that id is always numerical and sorted, we can do random access on the array
        // obj.data[id - 1].completed = !prev.data[id - 1].completed;
        // return obj;

        // no assumption made about the data passed
        return {
          data: prev.data.map(item => id === item.id ? {id: item.id, text: item.text, completed: !item.completed} : item)
        }
      }
    )
  }

  render(){
    // remember that with arrow notation, this will automatically set, however, with anonymous function, we need to do something like App.handleChange
    // we can't simply do this.handleChange
    const todoComponents = this.state.data.map(item => <TodoItem key={item.id} todo={item} handleChange={this.handleChange}/>)

    return (
      <div className="todo-list">
          {todoComponents}
      </div>
    );
  }

}

export default App;
