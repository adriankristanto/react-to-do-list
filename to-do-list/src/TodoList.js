import React from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

function TodoList(props){
    return (
        <div className="todo-list">
            {props.data.length !== 0 ?
                (props.data.map( todoItem => <TodoItem key={todoItem.id} todo={todoItem} handleItemClick={props.handleItemClick} handleRemoveClick={props.handleRemoveClick}/>)) :
                (<p className="empty">Nothing ToDo.</p>)
            }
        </div>
    );
}

export default TodoList;