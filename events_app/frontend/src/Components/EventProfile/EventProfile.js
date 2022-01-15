import React, { Component } from 'react';
import axios from 'axios'; 
import {useNavigate} from "react-router-dom";
import './EventProfile.css';
import {AiOutlineUser} from 'react-icons/ai';
import {IoLocationOutline} from "react-icons/io5";
import {IoPricetagOutline} from "react-icons/io5";
import {MdDateRange} from "react-icons/md";
import {MdAccessTime} from "react-icons/md";
import styles from './EventProfile.css';

class EventProfile extends React.Component {
    constructor(){
        super();
        this.state = {
            event:[]
        }
    }

    componentDidMount(){
    axios
      .post("http://127.0.0.1:8000/api/geteventdetails", {id: 17})
      .then(response =>{
        this.setState({event: response.data});
        console.log(this.state);
      }) 
      .catch(err => console.log(err));
    }

    render(){
        const {event} = this.state;
        return (
            <div className="EventProfile-container">
                <div className="img-container">
                <img src ={'/images/'+event.img}
                alt="art gallery" width="100%"
                height="420"/> 
                </div>
                <div className="LeftSide leftPadding">
                    <div className="EventTitle">
                            {event.name}
                    </div>

                    <div>
                        <p className = "UsersGoing"> <AiOutlineUser/>5225 users interested.
                        <u><a href="" >View</a></u><br></br> </p>
                    </div>

                    <div className="Location">
                        <p> <IoLocationOutline/> {event.location} </p>
                    </div>

                    <div className="Price">
                        <p> <IoPricetagOutline/> {event.price} </p>
                    </div>

                    <div className="Date">
                        <p> <MdDateRange/> {event.date}</p>
                    </div>

                    <div className="Time">
                        <p> <MdAccessTime/> {event.time}</p>
                    </div>
                </div>
                <div className="RightSide rightPadding" >

                <div style={{ display: 'flex', justifyContent: 'flex-end' }} >
                        <button type="button" className="anyButton brad marginEventProf"> Going </button> 
                    </div>

                    <div style={{float: 'left'}} >
                        <p className="Description">
                            {event.description}
                        </p>
                    </div>
                    <br/>
                    {/* <div style ={{float: 'left'}}>
                        <u><a href="" className="Report">Report event</a></u><br></br>
                    </div>  */}

                </div>
            </div>
        )
    }
  
}
 
export default EventProfile;