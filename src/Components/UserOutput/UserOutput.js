import React from 'react';

const UserOutput = (props) => {
    const styleUserOutput = {
        border: '1px solid blue',
        width: '60%',
        margin: '16px auto',
        boxShadow: '0 2px 3px #ccc',
        padding: '16px',
        textAlign: 'center',
        position: 'relative'
    }

    const styleUserName = {
        position: 'absolute',
        top: '8px',
        left: '8px',
        fontSize: '1.5em'
    }

    return (
        <div className="UserOutput" style={styleUserOutput}>
            <div className="UserName" style={styleUserName}>Username: {props.userName}</div>
            <h3>{props.heading}</h3>
            <p>{props.content[0]}</p>
            <p>{props.content[1]}</p>
        </div>
    );
}

export default UserOutput;