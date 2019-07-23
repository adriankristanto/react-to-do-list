import React, { useState } from "react";
import "./InputArea.css";

function InputArea(props){
    const [todoItem, setTodoItem] = useState('');

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
        <div className="input-area">
            <form>
                <input name="todoItem" type="text" placeholder="Add a ToDo item..." value={todoItem} onChange={handleChange}/>
                <button onClick={handleClick}>+</button>
            </form>
        </div>
    );
}

export default InputArea;