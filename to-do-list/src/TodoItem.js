import React, {useContext, useState} from "react";
import "./TodoItem.css";
import { ThemeContext } from "./ThemeContext";
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';
// import uuidv4 from 'uuid/v4';
import SkyLight from 'react-skylight';

const Container = styled.div``

function TodoItem(props){
    const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);
    const [removeIsMouseEnter, setRemoveIsMouseEnter] = useState(false);
    const [itemIsMouseEnter, setItemIsMouseEnter] = useState(false);
    const [detailsIsMouseEnter, setDetailsIsMouseEnter] = useState(false);

    // the following variable is used for react skylight modal
    let simpleDialog;

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

    const removeStyle = isLightTheme ? 
        (removeIsMouseEnter ? {backgroundColor: lightTheme.itemBackground, color: lightTheme.color} : {backgroundColor: "Transparent", color: lightTheme.color}) : 
        (removeIsMouseEnter ? {backgroundColor: darkTheme.itemBackground, color: darkTheme.color} : {backgroundColor: "Transparent", color: darkTheme.color})
    
    const detailsStyle = isLightTheme ?
        (detailsIsMouseEnter ? {backgroundColor: lightTheme.itemBackground, color: lightTheme.color} : {backgroundColor: "Transparent", color: lightTheme.color}) : 
        (detailsIsMouseEnter ? {backgroundColor: darkTheme.itemBackground, color: darkTheme.color} : {backgroundColor: "Transparent", color: darkTheme.color})

    const itemStyle = {
        color: !props.todo.completed ? (isLightTheme ? lightTheme.color: darkTheme.color) : "#505050",
        textDecoration: props.todo.completed && "line-through",
        fontStyle: props.todo.completed && "italic"
    }

    const dialogStyles = {
        position: 'absolute',
        borderRadius: '5px',
        color: isLightTheme ? lightTheme.color : darkTheme.color,
        backgroundColor: isLightTheme ? lightTheme.backgroundColor : darkTheme.backgroundColor
    }

    const overlayStyles = {
        backgroundColor: 'rgba(0,0,0,0.8)'
    }

    return (
        <Draggable draggableId={props.todo.id.toString()} index={props.index}>
            {(provided, snapshot) => (
                <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <div className="todo-item" style={snapshot.isDragging ? todoitemStyleDragged : todoitemStyle} onClick={() => props.handleItemClick(props.todo.id)} onMouseEnter={() => setItemIsMouseEnter(true)} onMouseLeave={() => setItemIsMouseEnter(false)} >
                        <input type="checkbox" checked={props.todo.completed} />
                        <p style={itemStyle}>{props.todo.text}</p>
                        <button id="details" 
                            onClick={() => 
                                {props.handleItemClick(props.todo.id)
                                simpleDialog.show()}} 
                            onMouseEnter={() => setDetailsIsMouseEnter(true)} onMouseLeave={() => setDetailsIsMouseEnter(false)} style={{...detailsStyle, fontSize: '14px'}}>Show Details</button>
                        <button id="remove" onClick={() => props.handleRemoveClick(props.todo.id)} onMouseEnter={()=>setRemoveIsMouseEnter(true)} onMouseLeave={()=>setRemoveIsMouseEnter(false)} style={{...removeStyle, fontSize: '14px'}}>&times;</button>
                    </div>

                    <SkyLight hideOnOverlayClicked ref={ref => simpleDialog = ref} dialogStyles={dialogStyles} overlayStyles={overlayStyles}>
                        Task Title:
                        <h1 style={{textAlign: 'center'}}>{props.todo.text}</h1>
                        Status: 
                        <p style={{textAlign:'center'}}>{props.todo.completed ? 'Completed' : 'In Progress'}</p>
                    </SkyLight>
                </Container>
            )}
        </Draggable>
    );
}

export default TodoItem;