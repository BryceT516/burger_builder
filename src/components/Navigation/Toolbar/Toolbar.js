import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamburgerButton from '../../UI/HamburgerButton/HamburgerButton';

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div onClick={props.openSideDrawer}><HamburgerButton /></div>

        <Logo height="80%" />
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>        
    </header>
);

export default Toolbar;