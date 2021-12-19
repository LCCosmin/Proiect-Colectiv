import React, { Component } from 'react';
import './EventPostAdmin.css';

class EventPostAdmin extends React.Component {
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