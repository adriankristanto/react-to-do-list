import React from "react";
import "./InputArea.css";

class InputArea extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todoItem: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleClick(event){
        event.preventDefault();
        this.setState({
            todoItem: ''
        });
        this.state.todoItem !== '' && this.props.handleSubmit(this.state.todoItem);
    }

    render(){
        return (
            <div className="input-area">
                <form>
                    <input name="todoItem" type="text" placeholder="Add a ToDo item..." value={this.state.todoItem} onChange={this.handleChange}/>
                    <button onClick={this.handleClick}>+</button>
                </form>
            </div>
        );
    }
}

export default InputArea;