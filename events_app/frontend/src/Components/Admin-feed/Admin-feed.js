import React from "react";
import "./Admin-feed.css";
import axios from 'axios'; 


class AdminFeed extends React.Component {
    constructor(){
        super();
        this.state = {
            organisers:[],
            events:[],

            myList:[],
            start:0,
            handlePath:"events"
        }
    
    }

    handleMyListRender(givenList, handlePath){
        this.setState({myList : givenList});
        this.setState({handlePath : handlePath});
    }

   showMyList(){
            let  myList=this.state.myList , uiItems = [];
            if (this.state.handlePath === "events"){
             myList.map((obj)=>{
                uiItems.push(
                    <article key={obj.id} className="dt w-100 hight padd   pb2  component" href="#0">
                         <div className=" display-grid">
                            <div className="dtc w2 v-mid ">      
                                { // here it should be added the photo path  
                                    <img src= {"/images/" + obj.img_name} 
                                    alt="event image from organizator"
                                    className=" db br-100 img-dim "/> 
                                }
                            </div>
                            <div className="dtc v-mid pl3">
                                <h1 className="f6 fw6 lh-title black ">{obj.name}</h1>
                                 <h2 className="f18 fw4 mt0 mb0 black-60">{obj.description}</h2>
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
            else{
                myList.map((obj)=>{
                    uiItems.push(
                        <article key={obj.id} className="dt w-100 hight padd   pb2  component" href="#0">
                             <div className=" display-grid">
                                <div className="dtc v-mid pl3">
                                    <h1 className="f6 fw6 lh-title black ">{obj.email}</h1>
                                    <h2 className="f6 fw6 lh-title black ">{obj.password}</h2>
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
            return uiItems;
    }


    componentDidMount(){
        axios
        .get("http://127.0.0.1:8000/api/getevents")
        .then(response =>{
            this.setState({events: response.data});
        }) 
        .catch(err => console.log(err));


        axios
        .get("http://127.0.0.1:8000/api/getorganisers")
        .then(response =>{
            this.setState({organisers: response.data});
        }) 
        .catch(err => console.log(err));
    }

    render(){
        const {events,organisers} = this.state;

        // first time the page is render it should start with the events page
        if(this.state.start==0){
            this.state.myList=events;
            this.setState({start : 2});
        }
        console.log(this.state.events);
        console.log(this.state.organisers);
        return(
            <main className="mw6 center main">
            <div className="ev-org">
                <div className="white-margin container">
                    <button id="btn-ev-org" className="ev-org-text" type="submit" onClick={()=>this.handleMyListRender(events, "events")}>Events</button>
                </div>
                <div className="container">
                <button id="btn-ev-org" className="ev-org-text" type="submit" onClick={()=>this.handleMyListRender(organisers, "organisers")}>Organisers</button>
                </div>

            </div>
            {this.showMyList()}
            </main>
        )
    }
  }
  
  export default AdminFeed;