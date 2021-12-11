import React, { Component } from 'react';
import './EventPostUser.css';

class EventPostUser extends React.Component {
    render(){
        return(
            <div className = "containerEventPost">
                <img src = "https://media.timeout.com/images/103455335/image.jpg" alt="EventPostPhoto" className="ImgFluid"></img>
                <div className="Event-Title"> Event Name </div>
                <div className = "Text-Box">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                </div>
                <div className="EventPostButtons" >
                            <button type="button" className="EventPostButton EventPostBrad"> Going </button> 
                            <div className="DividerEventPost"/>
                            <button type="button" className="EventPostButton EventPostBrad"> Maybe </button> 
                        </div>
            </div>
        )
    }
}

export default EventPostUser