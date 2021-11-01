import React, { Component } from "react";
import UsersData from './UsersData';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";


export default class HomePage extends Component{
    constructor(props){
        super(props);
        // this.state = {

        // }
    }
    render(){
        return (
            <Router>
                <Switch>
                    {/* <Route exact path="/"><p>This is the Home Page!</p></Route> */}
                    <Route path="/usersdata" component={UsersData}></Route>
                </Switch>
            </Router>
        );
    }
}