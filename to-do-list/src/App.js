import React from 'react';
import TodoList from "./TodoList";
import Footer from "./Footer";
import InputArea from "./InputArea";

// https://stackoverflow.com/questions/36856232/write-add-data-in-json-file-using-node-js

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      id: 0,
      data: []
    }
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleItemClick(id){
    this.setState(
      prev => ({
        data: prev.data.map(item => id === item.id ? {id: item.id, text: item.text, completed: !item.completed} : item)
      })
    )
  }

  handleSubmit(todoItem){
    this.setState(
      prev => ({
        id: prev.id + 1,
        data: prev.data.concat({
          id: prev.id + 1,
          text: todoItem,
          completed: false
        })
      })
    );
  }

  handleRemoveClick(id){
    this.setState(
      prev => ({
        data: prev.data.filter(item => id !== item.id)
      })
    );
  }

  render(){

    return (
      <div className="App">
        <TodoList handleItemClick={this.handleItemClick} data={this.state.data} handleRemoveClick={this.handleRemoveClick}/>
        <InputArea handleSubmit={this.handleSubmit}/>
        <Footer />
      </div>
    );
  }

}

export default App;
