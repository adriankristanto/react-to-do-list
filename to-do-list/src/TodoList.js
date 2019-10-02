import React, {useContext} from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";
import { ThemeContext } from "./ThemeContext";

function TodoList(props){
    const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

    const todolistStyle = isLightTheme ? {backgroundColor: lightTheme.backgroundColor} : {backgroundColor: darkTheme.backgroundColor}
    const emptyStyle = isLightTheme ? {color: lightTheme.emptyColor} : {color: darkTheme.emptyColor}

    return (
        <div className="todo-list" style={todolistStyle} ref={props.innerRef}>
            {props.data.length !== 0 ?
                (props.data.map( (todoItem, index) => <TodoItem key={todoItem.id} todo={todoItem} index = {index} handleItemClick={props.handleItemClick} handleRemoveClick={props.handleRemoveClick}/>)) :
                (<p className="empty" style={emptyStyle}>Nothing ToDo.</p>)
            }
        </div>
    );
}

export default TodoList;