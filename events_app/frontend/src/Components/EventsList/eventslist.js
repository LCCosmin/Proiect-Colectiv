import React from "react";
import "./eventslist.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Ads from "../Ads/Ads";

class EventsList extends React.Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  componentDidMount(){
    this.id = window.location.href.split('/').at(-1);
    axios
    .post("http://127.0.0.1:8000/api/getusersofevent", {id: this.id})
    .then(response =>{
        this.setState({events: response.data.events});
    }) 
    .catch(err => console.log(err));
  }

  // stopGoing(id){
  //   axios
  //   .post("http://127.0.0.1:8000/api/stopgoingtoevent", {'id_event': id, 'id_user': this.id})
  //   .then(response =>{
  //      if(response.data.ok == true){
         
  //      }
  //   }) 
  //   .catch(err => console.log(err));
  // }
  render() {
    const { events } = this.state;
    return (
      <main className="mainn-width-100 mainn-center white1">
        <div className="event-image-events">
          <img
            src="https://media.timeout.com/images/103455335/image.jpg"
            alt="events list picture"
          />
        </div>
        {
          events.map((event) => {
          return (

            <div className="margin-top-div">
                          <article
              key={event.id}
              className="display-table width-list-ev-90 auto-height1 pad-20 pad-b comp-list1"
              href="#0"
            >
              <div className=" display-grid-cust">
                <div className="display-table-cell wt-2rem vert-allign-mid">
                  {
                    // here it should be added the photo path
                    <img
                      src={"/images/" + event.img_name}
                      alt="user image"
                      className="bor-custom display-bl bord-radius-100 image-user-custom"
                    />
                  }
                </div>
                <div className="display-table-cell vert-allign-mid pad-lest-1rem">
                  <h1 className="font-sz-24 font-wt-600 line-ht-name white1">
                    {event.name}
                  </h1>
                  <h2 className="font-sz-18 font-wt-400 mrg-t-0 mrg-b-0 white1">
                    {event.description}
                  </h2>
                </div>
                <div className=" display-table-cell vert-allign-mid btn-r">
                  <button
                    id=""
                    className="grow-going font-sz-24 buton-reset dim-con-button dim-b bord-custom b-c-black dimm point pad-tb white1"
                    onClick={() => this.props.navigate("/eventprofile/" + event.id)}
                  >
                    Details
                  </button>
                  {/* <button
                    id=""
                    className="grow-going font-sz-24 buton-reset dim-con-button dim-b bord-custom b-c-black dimm point pad-tb white1"
                    onClick={this.stopGoing(event.id)}
                  >
                    Stop Going
                  </button> */}
                </div>
              </div>
            </article>
            </div>  
          );
        })}
        <Ads></Ads>
      </main>
    );
  }
}

function WithNavigate(props) {
  let navigate = useNavigate();
  return <EventsList {...props} navigate={navigate} />;
}
export default WithNavigate;