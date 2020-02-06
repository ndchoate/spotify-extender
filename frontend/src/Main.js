import React, { Component, useState } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import axios from "axios";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import NavigationBar from "./NavigationBar";

// class Main extends Component {
//     authorized = false;

//     render() {
//     // const classes = useStyles();

//         if (this.authorized) {
//             return (
//                 <HashRouter>
//                     <div>
//                         <h1>Spotify Playlist Creator</h1>
//                         {/* <BottomNavigation showLabels="true" classes={{root: classes.root}}>
//                             <BottomNavigationAction label="Home" icon={<Restore />} />
//                         </BottomNavigation> */}
//                         {/* <NavigationBar></NavigationBar> */}
                        
//                         <ul className="header">
//                             <li><NavLink exact to="/">Home</NavLink></li>
//                             <li><NavLink to="/stuff">Stuff</NavLink></li>
//                             <li><NavLink to="/contact">Contact</NavLink></li>
//                         </ul>
//                         <div className="content">
//                             <Route exact path="/" component={Home}/>
//                             <Route path="/stuff" component={Stuff}/>
//                             <Route path="/contact" component={Contact}/>
//                         </div>
//                     </div>
//                 </HashRouter>
//             );
//         }
//         else {

//         }
        
//     }
// }

export default function Main(props) {
    const [authorized, setAuthorized] = useState(false);
    const [authUrl, setAuthUrl] = useState("");

    // return (
    //     <HashRouter>
    //         <div>
    //             <h1>Spotify Playlist Creator</h1>
    //             {/* <BottomNavigation showLabels="true" classes={{root: classes.root}}>
    //                 <BottomNavigationAction label="Home" icon={<Restore />} />
    //             </BottomNavigation> */}
    //             {/* <NavigationBar></NavigationBar> */}
                
    //             <ul className="header">
    //                 <li><NavLink exact to="/">Home</NavLink></li>
    //                 <li><NavLink to="/stuff">Stuff</NavLink></li>
    //                 <li><NavLink to="/contact">Contact</NavLink></li>
    //             </ul>
    //             <div className="content">
    //                 <Route exact path="/" component={Home}/>
    //                 <Route path="/stuff" component={Stuff}/>
    //                 <Route path="/contact" component={Contact}/>
    //             </div>
    //         </div>
    //     </HashRouter>
    // );

    if (authorized) {
        return (
            <HashRouter>
                <div>
                    <h1>Spotify Playlist Creator</h1>
                    {/* <BottomNavigation showLabels="true" classes={{root: classes.root}}>
                        <BottomNavigationAction label="Home" icon={<Restore />} />
                    </BottomNavigation> */}
                    {/* <NavigationBar></NavigationBar> */}
                    
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
    else {
        // TODO: fix CORS issue Reason: CORS header ‘Access-Control-Allow-Origin’ missing (from the console log)
        axios.get("http://localhost:5000/")
        .then(
            response => {
                setAuthUrl(response);
            }
        )
        .catch(error => console.log(error));

        return (
            <a href={authUrl}>Login to Spotify</a>
        )
    }
}