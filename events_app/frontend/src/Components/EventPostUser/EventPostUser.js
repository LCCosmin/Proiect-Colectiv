import React, { Component } from 'react';
import './EventPostUser.css';
import axios from 'axios'; 

class EventPostUser extends React.Component {
    constructor(){
        super();
        this.state = {
            events:[]
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

    render(){
        const {events} = this.state;
        return(
            <main className="width-admin-main center-admin-auto white-admin">
                {
                    events.map((event)=>{
                        return(
                            <article key={event.id} className="display-admin-table width-admin-100 height-admin-auto padding-admin border-admin padding-bottom-admin component-admin" href="#0">
                                <div className = "containerEventPost">
                                    <img src = {'/images/'+event.img_name} alt="EventPostPhoto" className="ImgFluid"></img>
                                    <div className="Event-Title"> {event.name} </div>
                                    <div className = "Text-Box">
                                        {event.description}
                                    </div>
                                    <div className="EventPostButtons" >
                                                <button type="button" className="EventPostButton EventPostBrad"> Going </button> 
                                                <div className="DividerEventPost"/>
                                                <button type="button" className="EventPostButton EventPostBrad"> Maybe </button> 
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