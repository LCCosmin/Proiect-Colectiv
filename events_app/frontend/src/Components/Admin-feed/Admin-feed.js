import React from "react";
import "./Admin-feed.scoped.css"

import axios from 'axios';


class AdminFeed extends React.Component {
    constructor() {
        super();
        this.state = {
            organisers: [{
                id:1,
                email:"test 1",
                password:"description 1",
            },{
                id:2,
                email:"test 1",
                password:"description 1",
            },{
                id:3,
                email:"test 1",
                password:"description 1",
            }],
            events: [{
                id:1,
                email:"test 1",
                password:"description 1",
            },{
                id:2,
                email:"test 1",
                password:"description 1",
            },{
                id:3,
                email:"test 1",
                password:"description 1",
            }],

            myList: [],
            start: 0,
            handlePath: "events"
        }

    }

    handleMyListRender(givenList, handlePath) {
        this.setState({ myList: givenList });
        this.setState({ handlePath: handlePath });
    }

    manageButtons(obj, newStatus, entity) {
        if (entity === "events") {
            obj.status = newStatus;
            axios
                .put("http://127.0.0.1:8000/api/manageButtonsOrganizers", obj)
                .then(response => {
                    if (response.data.data === true) {
                        window.confirm("Status of the object has been modified with success!");
                    }
                    else {
                        window.confirm("An error somewhere (we do not know where) occured!");
                    }
                })
                .catch(err => console.log(err));
        }
        else {
            obj.status = newStatus;
            axios
                .put("http://127.0.0.1:8000/api/manageButtonsEvents", obj)
                .then(response => {
                    if (response.data.data === true) {
                        window.confirm("Status of the object has been modified with success!");
                    }
                    else {
                        window.confirm("An error somewhere (we do not know where) occured!");
                    }
                })
                .catch(err => console.log(err));
        }
    }

    showMyList() {
        let myList = this.state.myList, uiItems = [];

        if (this.state.handlePath === "events") {
            myList.map((obj) => {
                uiItems.push(
                    // copy paste la event-post admin component
                    <div className="containerEventPostAdmin">
                        <img src="https://media.timeout.com/images/103455335/image.jpg" alt="EventPostPhotoAdmin" className="ImgFluidAdmin"></img>
                        <div className="Event-TitleAdmin"> Event Name </div>
                        <div className="Text-BoxAdmin">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </div>
                        <div className="EventPostButtonsAdmin" >
                            <button type="button" className="EventPostButtonAdmin EventPostBradAdmin"> Accept </button>
                            <div className="DividerEventPostAdmin" />
                            <button type="button" className="EventPostButtonAdmin EventPostBradAdmin"> Decline </button>
                        </div>
                    </div>
                )
            })
        }
        else {
            myList.map((obj) => {
                uiItems.push(
                    <article key={obj.id} className="dt w-100 hight padd   pb2  component" href="#0">
                        <div className=" display-grid">
                            <div>
                                { // here it should be added the photo path  
                                    <img src="https://image.shutterstock.com/image-photo/kiev-ukraine-april-21-2015-260nw-1918637450.jpg"
                                        alt="event image from organizator"
                                        className=" db br-100 img-dim " />
                                }
                            </div>
                            <div id="email-pass">
                                <h1 className="f18 fw4 mt0 mb0 black-60 ">Email: {obj.email}</h1>
                                <h1 className="f18 fw4 mt0 mb0 black-60 ">Password: {obj.password}</h1>
                            </div>
                            <div className=" dtc v-mid btn-right">
                                <button id="bg-white" className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" onClick={() => { this.manageButtons(obj, "accepted", "events") }}>Accept</button>
                                <button id="bg-white" className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" onClick={() => { this.manageButtons(obj, "denied", "events") }}>Decline</button>
                            </div>
                        </div>
                    </article>
                )
            })
        }
        return uiItems;
    }


    componentDidMount() {
        axios
            .get("http://127.0.0.1:8000/api/geteventspending")
            .then(response => {
                this.setState({ events: response.data });
            })
            .catch(err => console.log(err));


        axios
            .get("http://127.0.0.1:8000/api/getorganisers")
            .then(response => {
                this.setState({ organisers: response.data });
            })
            .catch(err => console.log(err));
    }

    handleMyListRender(givenList, givenString) {
        this.setState({ myList: givenList });
        this.setState({ handlePath: givenString });
    }

    render() {
        const { events, organisers } = this.state;

        return (
            <main className="mw6 center main">
                <div className="ev-org">
                    <div className="white-margin container">
                        <button id="btn-ev-org" className="ev-org-text" type="submit" onClick={() => this.handleMyListRender(events, "events")}>Events</button>
                    </div>
                    <div className="container">
                        <button id="btn-ev-org" className="ev-org-text" type="submit" onClick={() => this.handleMyListRender(organisers, "organisers")}>Organisers</button>
                    </div>

                </div>
                {this.showMyList()}
            </main>
        )
    }
}

export default AdminFeed;