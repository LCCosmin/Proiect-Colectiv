import React, {Component} from 'react';
import {render} from "react-dom";
import HomePage from './HomePage';
import UsersData from './UsersData';

export default class App extends Component{
    constructor(props){
        super(props);
        // this.state = {

        // }
    }
    render(){
        return (
            <div> main
                <HomePage />
                {/* <UsersData /> */}
            </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv);