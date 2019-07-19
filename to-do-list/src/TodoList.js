import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props){
    return (
        <div className="todo-list">
            {props.data.map( todoItem => <TodoItem key={todoItem.id} todo={todoItem} handleItemClick={props.handleItemClick}/>)}
        </div>
    );
}

export default TodoList;