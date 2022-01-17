import React from "react";
import "./addevents.css";
import axios from 'axios'; 
import {IoLocationOutline} from "react-icons/io5";
import {IoPricetagOutline} from "react-icons/io5";
import { useNavigate } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'



class AddEvents extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      event: {
        name: "",
        price: "",
        id_organizer: 0,
        start_date: "",
        end_date: "",
        location: "",
        description: "",
        id_type: 1,
        status: "pending",
        img_name: "",
      },
      eventTypes: [],
    }
    this.aux = '';
}

  updateName = event => {
    this.state.event.name = event.target.value;
  }

  updateDescription = event => {
    this.state.event.description = event.target.value;
  }

  updatePrice = event => {
    this.state.event.price = event.target.value;
  }

  updateLocation = event => {
    this.state.event.location = event.target.value;
  }

  updateStartDate = event => {
    this.state.event.start_date = event.target.value;
  }

  updateEndDate = event => {
    this.state.event.end_date = event.target.value;
  }

  updateType = event => {
    this.state.event.id_type = event.target.value;
    if(event.target.value == 1) this.state.event.img_name = "party.jpg";
    else if(event.target.value == 2) this.state.event.img_name = "concerts_festivals.jpg";
    else if(event.target.value == 3) this.state.event.img_name = "conference_PublicSpeaking.jpg";
    else if(event.target.value == 4) this.state.event.img_name = "fun_activities.jpg";
    else if(event.target.value == 5) this.state.event.img_name = "job_fair.jpg";
    else if(event.target.value == 6) this.state.event.img_name = "library.jpg";
    else if(event.target.value == 7) this.state.event.img_name = "museum.jpg";
    else if(event.target.value == 9) this.state.event.img_name = "show.jpg";
    else if(event.target.value == 10) this.state.event.img_name = "sports.jpg";
    else if(event.target.value == 11) this.state.event.img_name = "tech.jpg";
    else if(event.target.value == 12) this.state.event.img_name = "workshop.jpg";
  }

  addEvent = () => {
    this.aux = this.state.event.img_name;
    this.state.event.id_organizer = this.id;
    axios
      .post("http://127.0.0.1:8000/api/addevent", this.state.event)
      .then(response => {
        if(response.data.added){
          window.confirm("The events has been sent for approval");
        }
        else{
          window.confirm("Watch your language!");
        }
      })
      .catch(err => console.log(err));
  }

  componentDidMount(){
    this.id = window.location.href.split('/').at(-1);
    axios
    .get("http://127.0.0.1:8000/api/geteventtypes")
    .then(response =>{
        this.setState({eventTypes: response.data});
    }) 
    .catch(err => console.log(err));
  }

  render(){
    const {eventTypes} = this.state;
    return (
      <>
        <div className="split left">
          <div className="bgr-transparent parr proff-image">
            {/* <img className="/" src="/images/no_profile_pic.png" /> */}
          </div>
          <div className="centered">
            <a href="" onClick={() => this.props.navigate("/organiserdata/" + this.id)}>Personal Data</a><br></br>
            <a href="" onClick={() => this.props.navigate("/addevents/" + this.id)}>My List</a><br></br>
          </div>
        </div>
        <div>
        </div>
        <div className="split right scroll">
          <legend className="f4 fww6 ph0 white titlecenter">Event details</legend>
          <input
            className=" margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
            type="text"
            name="name"
            id="name"
            placeholder="Event's name"
            onChange={this.updateName}
          />
           <input
              className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              onChange={this.updatePrice}
            />
          <div>
            <input
              className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
              type="text"
              name="description"
              id="description"
              placeholder="Event's description"
              onChange={this.updateDescription}
            />
            <input 
              className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              onChange={this.updateLocation}
            />
          </div>
          <input
            className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
            type="datetime-local"
            name="date"
            id="date"
            placeholder="Date"
            onChange={this.updateStartDate}
          />
          <input
            className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
            type="datetime-local"
            name="date"
            id="date"
            placeholder="Date"
            onChange={this.updateEndDate}
          />
          <br></br>
          <br></br>
          <label for="events" className="ev-type hover-cwhite cwhite-input input-event" onChange={this.updateType}>Choose an event type 
          <select className="tab hover-white-event input-event">
            <option value="event0" className="" disabled selected hidden>Event type</option>
            {
            eventTypes.map((eventType)=>{
                return(
                  <option value={eventType.id} className="">{eventType.name}</option>
              )})
            }
          </select>
          </label>
          <div>
            <input type="button" class="grow-add-events myb brad margin-bottom d-block mr-1 ml-auto" value="Add event" onClick={this.addEvent} />
          </div>
        </div>
      </>
    );
  }
};
function WithNavigate(props) {
  let navigate = useNavigate();
  return <AddEvents {...props} navigate={navigate} />;
}
export default WithNavigate;