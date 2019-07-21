import React from "react";
import "./InputArea.css";

class InputArea extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
    }

    render(){
        return (
            <div className="input-area">
                <form>
                    <input type="text" placeholder="Add a ToDo item..." />
                </form>
            </div>
        );
    }
}

export default InputArea;