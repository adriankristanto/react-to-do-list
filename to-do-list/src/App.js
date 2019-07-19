import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import todosData from "./todosData";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      data: todosData // idea: todosData can stay here as we would need to be able to add to the data from the user input
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(id){
    this.setState(
      prev => ({
        data: prev.data.map(item => id === item.id ? {id: item.id, text: item.text, completed: !item.completed} : item)
      })
    )
  }

  render(){
    return (
      <TodoList handleItemClick={this.handleItemClick} data={this.state.data} />
    );
  }

}

export default App;
