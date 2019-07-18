import React from "react";

function TodoItem(props){

    const itemStyle = {
        color: !props.todo.completed ? "whitesmoke" : "#505050",
        textDecoration: props.todo.completed && "line-through",
        fontStyle: props.todo.completed && "italic"
    }

    return (
        <div id={props.todo.id} className="todo-item">
            <input type="checkbox" checked={props.todo.completed} onChange={() => props.handleChange(props.todo.id)}/>
            <p style={itemStyle}>{props.todo.text}</p>
        </div>
    );
}

export default TodoItem;