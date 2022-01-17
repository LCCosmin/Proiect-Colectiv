import React, { Component } from "react";
import "./EventProfile.css";
import { AiOutlineUser } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import styles from "./EventProfile.css";
import Ads from "../Ads/Ads";

class EventProfile extends React.Component {
    constructor(){
        super();
        this.state = {
            event:[]
        }
        this.id = 0;
    }

    componentDidMount(){
        this.id = window.location.href.split('/').at(-1);
        axios
        .post("http://127.0.0.1:8000/api/geteventdetails", {id: this.id})
        .then(response =>{
            this.setState({event: response.data});
        }) 
        .catch(err => console.log(err));

        axios
        .post("http://127.0.0.1:8000/api/usersinterested", {id: this.id})
        .then(response =>{
            document.getElementById('users-interested').innerHTML = response.data.no_users + ' users interested';
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
                  height="300"/> 
                </div>
                <div className="LeftSide leftPadding">

                    <div className="EventTitle">
                            {event.name}
                    </div>

                    <div>
                        <p className = "UsersGoing"> <AiOutlineUser/><span id="users-interested"></span>
                        <u><a style={{'margin-left': '10px'}} href="" onClick={() => this.props.navigate("/participantslist/" + this.id)}>View</a></u><br></br> </p>
                    </div>
                
                    <div className="Location">
                        <p> <IoLocationOutline/> {event.location} </p>
                    </div>

                    <div className="Price">
                        <p> <IoPricetagOutline/> {event.price} </p>
                    </div>

                    <div className="Date">
                      <p> <MdDateRange/> {event.date} </p>
                    </div>

                    <div className="Time">
                      <p> <MdAccessTime/> {event.time} </p>
                    </div>
                  </div>

                <div className="RightSide rightPadding">

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }} >
                        <button type="button" className="grow-going anyButton brad marginEventProf"> Going </button> 
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
                <Ads></Ads>
          </div>
    );
  }
}
 
function WithNavigate(props) {
    let navigate = useNavigate();
    return <EventProfile {...props} navigate={navigate} />;
  }
  export default WithNavigate;
