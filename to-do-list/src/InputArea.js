import React, { useState, useContext } from "react";
import "./InputArea.css";
import {ThemeContext} from './ThemeContext';

function InputArea(props){
    const [todoItem, setTodoItem] = useState('');
    const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

    const inputAreaStyle = isLightTheme ? {backgroundColor: lightTheme.footerColor} : {backgroundColor: darkTheme.footerColor};

    function handleChange(event){
        const {value} = event.target;
        setTodoItem(value);
    }

    function handleClick(event){
        event.preventDefault();
        setTodoItem('');
        todoItem !== '' && props.handleSubmit(todoItem);
    }

    return (
        <div className="input-area" style={inputAreaStyle}>
            <form>
                <input name="todoItem" type="text" placeholder="Add a ToDo item..." value={todoItem} onChange={handleChange}/>
                <button onClick={handleClick}>+</button>
            </form>
        </div>
    );
}

export default InputArea;