import React from 'react';
import TodoList from "./TodoList";
import Footer from "./Footer";
import todosData from "./todosData";
import InputArea from "./InputArea";

// https://stackoverflow.com/questions/36856232/write-add-data-in-json-file-using-node-js

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      data: todosData
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
      <div className="App">
        <TodoList handleItemClick={this.handleItemClick} data={this.state.data} />
        <InputArea />
        <Footer />
      </div>
    );
  }

}

export default App;
