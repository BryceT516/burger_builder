import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div className="UserInput">
            <label for="userInput">UserInput</label>
            <input 
                id="userInput" 
                type="text" 
                placeholder="enter something here"
                value={props.value}
                onChange={props.changed}
            />
        </div>
    );
}

export default UserInput;