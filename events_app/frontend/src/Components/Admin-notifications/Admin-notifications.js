import React from "react";
import './Admin-notifications.css';
import axios from 'axios'; 


class AdminNotifications extends React.Component {
    constructor(){
        super();
        this.state = {
            events:[
                {
                    "id": 1,
                    "name": "Fotosinteza plantelor",
                    "start_date": 1637496120,
                    "end_date": 4098071460,
                    "location": "Cluj-Napoca",
                    "description": "Aduceti planta",
                    "status": "pending",
                    "id_organizer": 2,
                    "id_type": 1
                },
                {
                    "id": 2,
                    "name": "Cantecul greierilor de peste imas",
                    "start_date": 1637669280,
                    "end_date": 4098071460,
                    "location": "Imas",
                    "description": "In padurea cu alune aveau casa 2 pitici",
                    "status": "pending",
                    "id_organizer": 2,
                    "id_type": 1
                },
                {
                    "id": 4,
                    "name": "test",
                    "start_date": 1637518260,
                    "end_date": 4098071460,
                    "location": "test",
                    "description": "test",
                    "status": "pending",
                    "id_organizer": 2,
                    "id_type": 1
                }
            ]
        }
        this.state2={
            events:[],
        }
    }
    getEvents(){
        axios
            .get("http://127.0.0.1:8000/api/getevents")
            .then(response =>{
                this.state2.events = response.data;
            }) 
            .catch(err => console.log(err));
    };

    render(){
        this.getEvents();
        console.log(this.state2);
        const {events} = this.state;
        return(
            <main className="mw6 center main">
                {
                    events.map((event)=>{
                      
                        return(
                            <article key={event.id} className="dt w-100 hight padd bb  pb2  component" href="#0">
                                <div className="col-md-3">
                                    <div className="dtc w2 w3-ns v-mid">
                                        {/* <img src={event.img} 
                                        alt="event image from organizator"
                                        className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/> */}
                                    </div>
                                    <div className="dtc v-mid pl3">
                                        <h1 className="f6 f5-ns fw6 lh-title black mv0">{event.name} </h1>
                                        <h2 className="f6 fw4 mt0 mb0 black-60">{event.description}</h2>
                                    </div>
                                    <div className="dtc v-mid">
                                        <form className="w-100 tr">
                                        <button className="btn" type="submit">Accept</button>
                                        </form>
                                    </div>
                                    <div className="dtc v-mid">
                                        <form className="w-100 tr">
                                        <button className="btn" type="submit">Decline</button>
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

export default AdminNotifications;