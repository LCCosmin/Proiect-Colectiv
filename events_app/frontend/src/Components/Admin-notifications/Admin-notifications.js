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