import React from 'react';
import classes from './HamburgerButton.css';

const HamburgerButton = (props) => (
    <div className={classes.Icon} onClick={props.openSideDrawer}>
        MENU
    </div>

)

export default HamburgerButton;