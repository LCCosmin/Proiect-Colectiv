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
            <main className="width-admin-main center-admin-auto white-admin">
                {
                    events.map((event)=>{
                      
                        return(
                            <article key={event.id} className="display-admin-table width-admin-100 height-admin-auto padding-admin border-admin padding-bottom-admin component-admin" href="#0">
                                <div className="">
                                    <div className="display-admin-table-cell width-admin-2rem w3-ns v-mid">
                                        {/* <img src={event.img} 
                                        alt="event image from organizator"
                                        className="border-admin border-black-admin display-block-admin border-radius-admin w3-ns height-admin-2rem h3-ns"/> */}
                                    </div>
                                    <div className="display-admin-table-cell vertical-allign-mid padding-left-admin">
                                        <h1 className="font-size-admin f5-ns font-weight-admin-name line-height-admin-title white-admin margins-tb-admin">{event.name} </h1>
                                        <h2 className="font-size-admin font-weight-admin-desc margins-tb-admin white-admin">{event.description}</h2>
                                    </div>
                                    <div className="display-admin-table-cell vertical-allign-mid">
                                        <form className="width-admin-100 text-allgn-right">
                                        <button className="button-admin" type="submit">Accept</button>
                                        </form>
                                    </div>
                                    <div className="display-admin-table-cell vertical-allign-mid">
                                        <form className="width-admin-100 text-allgn-right">
                                        <button className="button-admin" type="submit">Decline</button>
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