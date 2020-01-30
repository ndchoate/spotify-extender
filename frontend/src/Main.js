import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import NavigationBar from "./NavigationBar";

class Main extends Component {
  render() {
    // const classes = useStyles();

    return (
        <HashRouter>
            <div>
                <h1>Spotify Playlist Creator</h1>
                {/* <BottomNavigation showLabels="true" classes={{root: classes.root}}>
                    <BottomNavigationAction label="Home" icon={<Restore />} />
                </BottomNavigation> */}
                <NavigationBar></NavigationBar>
                
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/stuff" component={Stuff}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}

export default Main;