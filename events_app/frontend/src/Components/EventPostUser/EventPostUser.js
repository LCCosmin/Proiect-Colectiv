import React, { Component } from 'react';
import './EventPostUser.css';
// import Nav from '.src/Components/Navbar/Nav.js';
import axios from 'axios'; 

class EventPostUser extends React.Component {
    constructor(){
        super();
        this.state = {
            events:[]
        }
    }

    componentDidMount(){
        console.log(this.props);
        axios
        .get("http://127.0.0.1:8000/api/geteventsaccepted")
        .then(response =>{
            this.setState({events: response.data});
        }) 
        .catch(err => console.log(err));
    }

    render(){
        // <Nav/>
        const {events} = this.state;
        return(
            <main className="width-admin-main center-admin-auto white-admin">
                <div className="topnav" id="myTopnav">
                    <a>
                    <img src="./logo.png" 
                    width="135px" height="100%" className="logo" alt="OmniEvents"/>
                    </a>
                    <a >
                        <div className="searchContainer">
                            <i className="fa fa-search searchIcon"></i>
                            <input className="searchBox" type="search" name="search" placeholder="Search..."/>
                        </div>
                    </a>
                    <div className="margin">
                        <a href="#mylist">My list</a>
                        <a href="#signot">Signout</a>
                    
                        <div className="notification-list-user-img">
                                <img src="https://img.icons8.com/color/100/000000/name.png" alt="" className="user-avatar-md rounded-circle"/>
                        </div>
                    </div>  
                </div>
                {
                    events.map((event)=>{
                        return(
                            <article key={event.id} id={event.id} className="display-admin-table width-admin-100 height-admin-auto padding-admin border-admin padding-bottom-admin component-admin" href="#0">
                                <div className = "containerEventPost">
                                    <img src = {'/images/'+event.img_name} alt="EventPostPhoto" className="ImgFluid"></img>
                                    <div className="Event-Title"> {event.name} </div>
                                    <div className = "Text-Box">
                                        {event.description}
                                    </div>
                                    <div className="EventPostButtons" >
                                                <button type="button" className="EventPostButton EventPostBrad"> Going </button> 
                                                <div className="DividerEventPost"/>
                                                {/* <button type="button" className="EventPostButton EventPostBrad"> Maybe </button>  */}
                                            </div>
                                </div>
                            </article>
                        )
                    })
                }
            </main>
        )
    }
}

export default EventPostUser