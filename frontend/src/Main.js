import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from "@material-ui/core/styles";
// import getMuiTheme from "material-ui/styles/getMuiTheme";
// import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import Restore from "@material-ui/icons/Restore";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact"; 

class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>Spotify Playlist Creator</h1>
                <BottomNavigation showLabels="true">
                    <BottomNavigationAction label="Home" icon={<Restore />} />
                </BottomNavigation>
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