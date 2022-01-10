import React, { Component } from 'react';
import './EventPostAdmin.css';
import axios from 'axios'; 

class EventPostAdmin extends React.Component {
    constructor(){
        super();
        this.state = {
            events:[]
        }
    }
    componentDidMount(){
        axios
        .get("http://127.0.0.1:8000/api/geteventspending")
        .then(response =>{
            this.setState({events: response.data});
        }) 
        .catch(err => console.log(err));
    }
    render(){
        return(
            <div className = "containerEventPostAdmin">
                <img src = "https://media.timeout.com/images/103455335/image.jpg" alt="EventPostPhotoAdmin" className="ImgFluidAdmin"></img>
                <div className="Event-TitleAdmin"> Event Name </div>
                <div className = "Text-BoxAdmin">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                </div>
                <div className="EventPostButtonsAdmin" >
                            <button type="button" className="EventPostButtonAdmin EventPostBradAdmin"> Accept </button> 
                            <div className="DividerEventPostAdmin"/>
                            <button type="button" className="EventPostButtonAdmin EventPostBradAdmin"> Decline </button> 
                        </div>
            </div>
        )
    }
}

export default EventPostAdmin