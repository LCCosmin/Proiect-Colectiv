import React from "react";
import "./Admin-feed.css"

class AdminFeed extends React.Component {
    constructor(){
        super();
        this.state = {
            events:[
                {
                    "id": 1,
                    "event_name": "Event",
                    "organizer_name": "Organiser name",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "status": "pending"
                },
                {
                    "id": 2,
                    "event_name": "Event",
                    "organizer_name": "Organiser name",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    "status": "pending"
                },
                {
                    "id": 3,
                    "event_name": "Event",
                    "organizer_name": "Organiser name",
                    "description": "details",
                    "status": "pending"
                }
            ]
        }
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
                                            <img src="https://s3-alpha-sig.figma.com/img/6a03/487f/fe0efa3177b2f82f4cc3b32042ec4b4d?Expires=1639353600&Signature=LxLh13O8p3ePdi-qCC2FnIXWvil0s33WJ6EUGDp3Ye~eIstxo2875KZsHedliqHS07WjG958TbOZDr0XDWDDlZB1ooXO~1-wGVtMTvK3qRL5B-S4WrQPTtdUVnASXwt5Rcv6tS9fvdJuCiN3C6cwgPUw2p1WJ3lptEB08NWWUuUec5hWUl9XDll9KP1E8lZkfhCzHTMhcL8ltQIJQVrPqqqCAHwT1z1oW6Fc2axzmRjb013-76c6uKhmQHGB6uAgS7yYeSOboUMk0~ujBfsORDXhbdzG-DXzQ6fOR1tatmgb8zmqYfXODWFVlBIj3Y5UKe5ACasx24X75It-y0g2HQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" 
                                            alt="event image from organizator"
                                            className="ba  db br-100 img-dim "/> 
                                        }
                                    </div>
                                    <div className="dtc v-mid pl3">
                                        <h1 className="f6 fw6 lh-title black ">{event.event_name}/{event.organizer_name} </h1>
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