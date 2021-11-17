import React from "react";
import './Admin-notifications.css';



class AdminNotifications extends React.Component {
    constructor(){
        super();
        this.state = {
            eventsRequests:[
            {
                _id:1,
                name:"Young Gatchell",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt volutpat mollis. Mauris vitae mauris quis velit scelerisque mattis. Nam aliquam nisl ut leo elementum, ac pretium nibh consequat. Duis a dapibus nibh. Proin in sollicitudin quam, at cursus nisi. Nulla sollicitudin metus dolor, bibendum eleifend ante facilisis vitae.",
                img:"http://mrmrs.github.io/photos/p/2.jpg",
                status:false
            },
            {
                _id:2,
                name:"Deirdre Lachance",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt volutpat mollis. Mauris vitae mauris quis velit scelerisque mattis. Nam aliquam nisl ut leo elementum, ac pretium nibh consequat. Duis a dapibus nibh. Proin in sollicitudin quam, at cursus nisi. Nulla sollicitudin metus dolor, bibendum eleifend ante facilisis vitae.",
                img:"http://mrmrs.github.io/photos/p/5.jpg",
                status:false
            },
            {
                _id:3,
                name:"Frederic Starner",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt volutpat mollis. Mauris vitae mauris quis velit scelerisque mattis. Nam aliquam nisl ut leo elementum, ac pretium nibh consequat. Duis a dapibus nibh. Proin in sollicitudin quam, at cursus nisi. Nulla sollicitudin metus dolor, bibendum eleifend ante facilisis vitae.",
                img:"http://mrmrs.github.io/photos/p/4.jpg",
                status:false
            },
            {
                _id:4,
                name:"Young Gatchell",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt volutpat mollis. Mauris vitae mauris quis velit scelerisque mattis. Nam aliquam nisl ut leo elementum, ac pretium nibh consequat. Duis a dapibus nibh. Proin in sollicitudin quam, at cursus nisi. Nulla sollicitudin metus dolor, bibendum eleifend ante facilisis vitae.",
                img:"http://mrmrs.github.io/photos/p/2.jpg",
                status:false
            },
            {
                _id:5,
                name:"Deirdre Lachance",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt volutpat mollis. Mauris vitae mauris quis velit scelerisque mattis. Nam aliquam nisl ut leo elementum, ac pretium nibh consequat. Duis a dapibus nibh. Proin in sollicitudin quam, at cursus nisi. Nulla sollicitudin metus dolor, bibendum eleifend ante facilisis vitae.",
                img:"http://mrmrs.github.io/photos/p/5.jpg",
                status:false
            },
            {
                _id:6,
                name:"Frederic Starner",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt volutpat mollis. Mauris vitae mauris quis velit scelerisque mattis. Nam aliquam nisl ut leo elementum, ac pretium nibh consequat. Duis a dapibus nibh. Proin in sollicitudin quam, at cursus nisi. Nulla sollicitudin metus dolor, bibendum eleifend ante facilisis vitae.",
                img:"http://mrmrs.github.io/photos/p/4.jpg",
                status:false
            }]
        }
    }
    render(){
        const {eventsRequests} = this.state;
        return(
            <main className="mw6 center main">
                            {
                                eventsRequests.map((organizer)=>{
                                    return(
                                        <article key={organizer._id} className="dt w-100 hight padd bb  pb2  component" href="#0">
                                            
                                            <div className="col-md-3">
                                                <div className="dtc w2 w3-ns v-mid">
                                                    <img src={organizer.img} 
                                                    alt="event image from organizator"
                                                    className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                                                </div>
                                                <div className="dtc v-mid pl3">
                                                    <h1 className="f6 f5-ns fw6 lh-title black mv0">{organizer.name} </h1>
                                                    <h2 className="f6 fw4 mt0 mb0 black-60">{organizer.description}</h2>
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