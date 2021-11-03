import React, {Component} from 'react';
import {render} from "react-dom";
import HomePage from './components/HomePage';
import UsersData from './components/UsersData';

export default class App extends Component{
    constructor(props){
        super(props);
        // this.state = {

        // }
    }
    render(){
        return (
            <div>main</div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv);