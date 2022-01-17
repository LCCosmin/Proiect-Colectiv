import React, { Component } from 'react';
import './EventPostUser.css';
// import Nav from '.src/Components/Navbar/Nav.js';
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";
import {IoLocationOutline} from "react-icons/io5";
import {IoPricetagOutline} from "react-icons/io5";
import {MdDateRange} from "react-icons/md";
import {GiPartyPopper} from "react-icons/gi";
import Ads from "../Ads/Ads";
import Filter from "./filter.js"; 


class EventPostUser extends React.Component {
    constructor(){
        super();
        this.state = {
            events:[],
            types: [],
        }
        this.id = 0;
    }
    timeConverter(timestamp){
        var a = new Date(timestamp * 1000);
        var time = a.getDate() + '/' + parseInt(a.getMonth() + 1) + '/' + a.getFullYear() + ' ' +  a.getHours() + ':' + a.getMinutes();
        return time;
    }

    getEventType(id_type){
        const {types} = this.state;
        let name = 'none';
        types.map((type)=>{
            if(type.id == id_type) name = type.name;
        });
        return name;
    }

    componentDidMount(){
        this.id = window.location.href.split('/').at(-1);
        axios
        .get("http://127.0.0.1:8000/api/geteventsaccepted")
        .then(response =>{
            this.setState({events: response.data});
            console.log(typeof(response.data));
        }) 
        .catch(err => console.log(err));
        axios
        .get("http://127.0.0.1:8000/api/geteventtypes")
        .then(response =>{
            this.setState({types: response.data});

        }) 
        .catch(err => console.log(err));
    }

    goToProfile = () => {
        this.props.navigate("/personaldata/" + this.id);
    }

    userGoingToEvent = () => {
        let btnGoing = document.getElementsByClassName("going-btn");
        let idEvent = parseInt(btnGoing[0].getAttribute('id'));
        var userToEvent = { id_user: this.id, id_event: idEvent};
        axios
        .post("http://127.0.0.1:8000/api/usergoingtoevent", userToEvent)
        .then(response =>{
            if(response.data.ok == true){
                document.getElementById(response.data.id).style.display = "none";
            }else{
                window.alert("Something is wrong!");
            }
        }) 
        .catch(err => console.log(err));
    }

    render(){
        const {events} = this.state;
        return(
            <main className="width-admin-main center-admin-auto white-admin">
                <div className="topnav" id="myTopnav">
                    <a>
                    <img src="/images/logo.png" 
                    width="135px" height="100%" className="logo" alt="OmniEvents" />
                    </a>
                    <a >
                        <div className="searchContainer">
                            <i className="fa fa-search searchIcon"></i>
                            <input className="searchBox" type="search" name="search" placeholder="Search..."/>
                        </div>
                    </a>
                    <div className="margin">
                        <a style={{"padding-top": "30px"}} href="" onClick={() => this.props.navigate("/eventslist/" + this.id)}>My list</a>
                        <a style={{"padding-top": "30px"}} href="" onClick={() => this.props.navigate("/")}>Signout</a>
                    
                        <div style={{"padding-top": "7px"}} className="notification-list-user-img">
                                <img id="user-profile-img" src="/images/no_profile_pic.png" alt="" className="user-avatar-md rounded-circle"  onClick={this.goToProfile}/>
                        </div>
                    </div>  
                </div>

                 <div className = "filterBar">
                    <Filter handlesearch={this.handlesearch} state={this.state} />
                    </div> 
                {
                    events.map((event)=>{
                        return(
                            <article key={event.id} id={event.id} className="display-admin-table width-admin-100 height-admin-auto padding-admin border-admin padding-bottom-admin component-admin" href="#0">
                                <div  className = "containerEventPost">
                                    <img src = {'/images/'+event.img_name} alt="EventPostPhoto" className="ImgFluid" style={{"cursor": "pointer"}} onClick={() => this.props.navigate("/eventprofile/" + event.id)}></img>
                                    <div className="Event-Title"> {event.name} </div>
                                    <div className='StartDate'>
                                        <p> <MdDateRange/> Start date: {this.timeConverter(event.start_date)}</p>
                                    </div>
                                    <div className='EndDate'>
                                        <p> <MdDateRange/> End date: {this.timeConverter(event.end_date)}</p>
                                    </div>
                                    <div className='Price'>
                                        <p> <IoPricetagOutline/> Price: {event.price}</p>
                                    </div>
                                    <div className='Location'>
                                        <p> <IoLocationOutline/> Location: {event.location}</p>
                                    </div>
                                    <div className='Type'>
                                        <p> <GiPartyPopper/> {this.getEventType(event.id_type)}</p>
                                    </div>
                                    <div className="EventPostButtons" >
                                                <button id={event.id} type="button" style={{"z-index": "1", "position":"fixed"}} className="grow-going EventPostButton EventPostBrad going-btn" onClick={this.userGoingToEvent}> Going </button> 
                                                <div className="DividerEventPost"/>
                                                {/* <button type="button" className="EventPostButton EventPostBrad"> Maybe </button>  */}
                                            </div>
                                </div>
                            </article>
                        )
                    })
                }
                <Ads></Ads>
            </main>
        )
    }
}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <EventPostUser {...props} navigate={navigate} />;
  }
  export default WithNavigate;
