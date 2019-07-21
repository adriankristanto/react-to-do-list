import React from 'react';
import TodoList from "./TodoList";
import Footer from "./Footer";
import InputArea from "./InputArea";

// TODO: experiment with local storage

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      id: 0,
      data: JSON.parse(localStorage.getItem('todoList')) || []
    }
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.handleUnload = this.handleUnload.bind(this);
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

  handleUnload(){
    localStorage.setItem('todoList', JSON.stringify(this.state.data));
  }

  componentDidMount(){
    window.addEventListener('beforeunload', this.handleUnload)  
  }

  componentWillUnmount(){
    window.removeEventListener('beforeunload', this.handleUnload);
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
