import React, { Component } from 'react';
import './EventPostOrganiser.css';
// import Nav from '.src/Components/Navbar/Nav.js';
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";
import {IoLocationOutline} from "react-icons/io5";
import {IoPricetagOutline} from "react-icons/io5";
import {MdDateRange} from "react-icons/md";
import {GiPartyPopper} from "react-icons/gi";


class EventPostOrganiser extends React.Component {
    constructor(){
        super();
        this.state = {
            events:[],
        }
    }

    componentDidMount(){
        axios
        .get("http://127.0.0.1:8000/api/geteventsaccepted")
        .then(response =>{
            this.setState({events: response.data});
        }) 
        .catch(err => console.log(err));
    }

    goToProfile = () => {
        this.props.navigate("/organiserdata/" + this.props.loggedUser.user.id); 
    }

    modifyEventData= () => {
        this.props.navigate("/addevents/" + this.props.loggedUser.user.id);
    }

    render(){
        const {events} = this.state;
        console.log(events);
        return(
            <main className="width-admin-main center-admin-auto white-admin">
                <div className="topnav" id="myTopnav">
                    <a onClick={() => this.props.navigate("/changepassword/" + this.state.info.id_user)}>
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
                        <a href="#mylist" onClick={() => this.props.navigate("/eventprofile/")}>My list</a>
                        <a href="#signot">Signout</a>
                    
                        <div className="notification-list-user-img">
                                <img src="/images/no_profile_pic.png" alt="" className="user-avatar-md rounded-circle" onClick={this.goToProfile}/>
                        </div>
                    </div>  
                </div>
                {
                    events.map((event)=>{
                        return(
                            <article key={event.id} id={event.id} className="display-admin-table width-admin-100 height-admin-auto padding-admin border-admin padding-bottom-admin component-admin" href="#0">
                                <div className = "containerEventPost">
                                    <img src = {'/images/'+event.img_name} alt="EventPostPhoto" className="ImgFluid" onClick={() => this.props.navigate("/eventprofile/" + event.id)} ></img>
                                    <div className="Event-Title"> {event.name} </div>
                                    <div className='StartDate'>
                                        <p> <MdDateRange/> Start date</p>
                                    </div>
                                    <div className='EndDate'>
                                        <p> <MdDateRange/> End date</p>
                                    </div>
                                    <div className='Price'>
                                        <p> <IoPricetagOutline/> Price</p>
                                    </div>
                                    <div className='Location'>
                                        <p> <IoLocationOutline/> Location</p>
                                    </div>
                                    <div className='Type'>
                                        <p> <GiPartyPopper/> Type</p>
                                    </div>
                                    <div className="EventPostButtons" >
                                        <button id={event.id} type="button" className="EventPostButton EventPostBrad going-btn" onClick={this.modifyEventData}> Modify </button> 
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

function WithNavigate(props) {
    let navigate = useNavigate();
    return <EventPostOrganiser {...props} navigate={navigate} />;
  }
  export default WithNavigate;