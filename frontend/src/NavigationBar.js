import React, { Component } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Restore from "@material-ui/icons/Restore";

const useStyles = makeStyles({
    root: {
        background: '#212121'
    }
});

const NavigationBar = () => {
    const classes = useStyles();

    return (
        <BottomNavigation showLabels="true" classes={{root: classes.root}}>
            <BottomNavigationAction label="Home" icon={<Restore />} />
        </BottomNavigation>
    );
};

export default NavigationBar;
