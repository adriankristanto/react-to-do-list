import React, {useState, useEffect} from 'react';
import uuidv4 from 'uuid/v4';
import TodoList from "./TodoList";
import Footer from "./Footer";
import InputArea from "./InputArea";
import ThemeContextProvider from "./ThemeContext";
import {DragDropContext} from 'react-beautiful-dnd';

function App(){
  const [data, setData] = useState(JSON.parse(localStorage.getItem('todoList')) || []);

  function handleItemClick(id){
    setData(prev => prev.map(item => id === item.id ? {id: item.id, text: item.text, completed: !item.completed} : item));
  }

  function handleSubmit(todoItem){
    todoItem.replace(/\s/g, '').length && 
    setData(prev => prev.concat({
      id: uuidv4(),
      text: todoItem,
      completed: false
    }))
  }
  
  function handleRemoveClick(id){
    setData(prev => prev.filter(item => id !== item.id));
  }

  function handleUnload(){
    localStorage.setItem('todoList', JSON.stringify(data));
  }

  useEffect(() => {
    window.addEventListener('beforeunload', handleUnload)
    return () => {window.removeEventListener('beforeunload', handleUnload)};
  });

  function onDragEnd(result){
    return 
  }

  return (
      <ThemeContextProvider onDragEnd={onDragEnd}>
        <DragDropContext>
          <TodoList handleItemClick={handleItemClick} data={data} handleRemoveClick={handleRemoveClick}/>
        </DragDropContext>
        <InputArea handleSubmit={handleSubmit}/>
        <Footer />
      </ThemeContextProvider>
  );
}

export default App;
