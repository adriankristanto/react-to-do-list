import React, { useState, useContext } from "react";
import "./InputArea.css";
import {ThemeContext} from './ThemeContext';

function InputArea(props){
    const [todoItem, setTodoItem] = useState('');
    const [isMouseEnter, setIsMouseEnter] = useState(false);
    const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

    const inputAreaStyle = isLightTheme ? {backgroundColor: lightTheme.footerColor} : {backgroundColor: darkTheme.footerColor};
    const buttonStyle = (isLightTheme) ?
        (isMouseEnter ? {backgroundColor: lightTheme.itemBackgroundOnHover, color: lightTheme.color} : {backgroundColor: lightTheme.itemBackground, color: lightTheme.color})
    :
        (isMouseEnter ? {backgroundColor: darkTheme.itemBackgroundOnHover, color: darkTheme.color} : {backgroundColor: darkTheme.itemBackground, color: darkTheme.color})
    const textboxStyle = isLightTheme ? {backgroundColor: lightTheme.itemBackground, color: lightTheme.color} : {backgroundColor: darkTheme.itemBackground, color: darkTheme.color}


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
                <input name="todoItem" type="text" placeholder="Add a ToDo item..." value={todoItem} onChange={handleChange} style={textboxStyle} />
                <button onClick={handleClick} style={buttonStyle} onMouseEnter={() => setIsMouseEnter(true)} onMouseLeave={() => setIsMouseEnter(false)}>+</button>
            </form>
        </div>
    );
}

export default InputArea;