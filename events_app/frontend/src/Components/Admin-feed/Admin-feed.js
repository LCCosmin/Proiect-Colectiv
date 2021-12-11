import React from "react";
import "./Admin-feed.css";
import axios from 'axios'; 

class AdminFeed extends React.Component {
    constructor(){
        super();
        this.state = {
            events:[]
        }
    }

    componentDidMount(){
        axios
        .get("http://127.0.0.1:8000/api/getevents")
        .then(response =>{
            this.setState({events: response.data});
        }) 
        .catch(err => console.log(err));
    }

    render(){
        const {events} = this.state;
        return(
            <main className="mw6 center main">
            <div className="ev-org">
                <div className="white-margin">
                    <h1 className="ev-org-text ">Events</h1>
                </div>
                <h1 className="ev-org-text">Organisers</h1>
            </div>
                {
                    events.map((event)=>{
                      
                        return(
                            <article key={event.id} className="dt w-100 hight padd   pb2  component" href="#0">
                                <div className=" display-grid">
                                    <div className="dtc w2 v-mid ">
                                        
                                        { // here it should be added the photo path  
                                            <img src={'/images/' + event.img_name} 
                                            alt="event image from organizator"
                                            className="ba  db br-100 img-dim "/> 
                                        }
                                    </div>
                                    <div className="dtc v-mid pl3">
                                        <h1 className="f6 fw6 lh-title black ">{event.name}/{event.organizer_name} </h1>
                                        <h2 className="f18 fw4 mt0 mb0 black-60">{event.description}</h2>
                                    </div>
                                    <div className=" dtc v-mid btn-right">
                                        <form className="w-100 tr">
                                        <button id="bg-white" className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">Accept</button>
                                        </form>
                                        <form className="w-100 tr">
                                        <button id="bg-white" className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">Decline</button>
                                        </form>
                                    </div>
                                </div>
                            </article>
                    )})
                }
            </main>
        )
    }
  }
  
  export default AdminFeed;