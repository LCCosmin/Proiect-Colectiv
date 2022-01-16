import React from "react";
import './Admin-notifications.css';
import axios from 'axios'; 


class AdminNotifications extends React.Component {
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
        console.log(this.state);
        const {events} = this.state;
        return(
            <main className="width-admin-main center-admin-auto white-admin">
                {
                    events.map((event)=>{
                      
                        return(
                            <article key={event.id} className="display-admin-table width-admin-100 height-admin-auto padding-admin border-admin padding-bottom-admin component-admin" href="#0">
                                <div className="">
                                    <div className="display-admin-table-cell width-admin-2rem w3-ns v-mid">
                                        <img src={'/images/'+event.img_name} 
                                        alt="event image from organizator"
                                        className="border-admin border-black-admin display-block-admin border-radius-admin w3-ns height-admin-2rem h3-ns"/>
                                    </div>
                                    <div className="display-admin-table-cell vertical-allign-mid padding-left-admin">
                                        <h1 className="font-size-admin f5-ns font-weight-admin-name line-height-admin-title white-admin margins-tb-admin">{event.name} </h1>
                                        <h2 className="font-size-admin font-weight-admin-desc margins-tb-admin white-admin">{event.description}</h2>
                                    </div>
                                    <div className="display-admin-table-cell vertical-allign-mid">
                                        <form className="width-admin-100 text-allgn-right">
                                        <button className="grow-accept-deny button-admin" type="submit">Accept</button>
                                        </form>
                                    </div>
                                    <div className="display-admin-table-cell vertical-allign-mid">
                                        <form className="width-admin-100 text-allgn-right">
                                        <button className="grow-accept-deny button-admin" type="submit">Decline</button>
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