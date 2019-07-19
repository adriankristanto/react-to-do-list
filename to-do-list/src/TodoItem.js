import React from "react";

function TodoItem(props){

    const itemStyle = {
        color: !props.todo.completed ? "whitesmoke" : "#505050",
        textDecoration: props.todo.completed && "line-through",
        fontStyle: props.todo.completed && "italic"
    }

    return (
        <div className="todo-item" onClick={() => props.handleItemClick(props.todo.id)}>
            <input type="checkbox" checked={props.todo.completed} />
            <p style={itemStyle}>{props.todo.text}</p>
        </div>
    );
}

export default TodoItem;