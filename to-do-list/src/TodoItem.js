import React, {useContext, useState} from "react";
import "./TodoItem.css";
import { ThemeContext } from "./ThemeContext";
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';
// import uuidv4 from 'uuid/v4';

const Container = styled.div``

function TodoItem(props){
    const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);
    const [buttonIsMouseEnter, setButtonIsMouseEnter] = useState(false);
    const [itemIsMouseEnter, setItemIsMouseEnter] = useState(false);

    const todoitemStyle = isLightTheme ? 
    itemIsMouseEnter ? {backgroundColor: lightTheme.itemBackgroundOnHover} : {backgroundColor: lightTheme.itemBackground}
    :
    itemIsMouseEnter ? {backgroundColor: darkTheme.itemBackgroundOnHover} : {backgroundColor: darkTheme.itemBackground}

    const todoitemStyleDragged = isLightTheme ? {
        boxShadow: "5px 10px 18px grey",
        ...todoitemStyle
    } : {
        boxShadow: "5px 10px 18px black",
        ...todoitemStyle
    }

    const buttonStyle = isLightTheme ? 
        (buttonIsMouseEnter ? {backgroundColor: lightTheme.itemBackground, color: lightTheme.color} : {backgroundColor: "Transparent", color: lightTheme.color}) : 
        (buttonIsMouseEnter ? {backgroundColor: darkTheme.itemBackground, color: darkTheme.color} : {backgroundColor: "Transparent", color: darkTheme.color})

    const itemStyle = {
        color: !props.todo.completed ? (isLightTheme ? lightTheme.color: darkTheme.color) : "#505050",
        textDecoration: props.todo.completed && "line-through",
        fontStyle: props.todo.completed && "italic"
    }

    return (
        <Draggable draggableId={props.todo.id.toString()} index={props.index}>
            {(provided, snapshot) => (
                <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <div className="todo-item" style={snapshot.isDragging ? todoitemStyleDragged : todoitemStyle} onClick={() => props.handleItemClick(props.todo.id)} onMouseEnter={() => setItemIsMouseEnter(true)} onMouseLeave={() => setItemIsMouseEnter(false)} >
                        <input type="checkbox" checked={props.todo.completed} />
                        <p style={itemStyle}>{props.todo.text}</p>
                        <button onClick={() => props.handleRemoveClick(props.todo.id)} onMouseEnter={()=>setButtonIsMouseEnter(true)} onMouseLeave={()=>setButtonIsMouseEnter(false)} style={buttonStyle}>x</button>
                    </div>
                </Container>
            )}
        </Draggable>
    );
}

export default TodoItem;