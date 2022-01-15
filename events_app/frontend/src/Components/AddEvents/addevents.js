import React from "react";
import "./addevents.css";
import axios from 'axios'; 
import {IoLocationOutline} from "react-icons/io5";
import {IoPricetagOutline} from "react-icons/io5";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'



class AddEvents extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      event: {
        name: "",
        price: "",
        id_organizer: 15,
        start_date: "",
        end_date: "",
        location: "",
        description: "",
        id_type: 1,
        status: "pending",
        img_name: null,
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
  }

  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    this.state.event.img_name = event.target.files[0];
  }

  fileUploadHandler = (name) =>{
    const fd = new FormData();
    this.state.event.img_name = this.aux;
    fd.append('image', this.state.event.img_name, name + "." +this.state.event.img_name.name.split(".")[1]);
    axios
      .post("http://127.0.0.1:8000/api/uploadimage", fd)
      .then(response =>{
      })
      .catch(err => console.log(err));
  }

  addEvent = () => {
    this.aux = this.state.event.img_name;
    //window.confirm(this.state.event.img_name);
    this.state.event.img_name = this.state.event.img_name.name.split(".")[1];
    axios
      .post("http://127.0.0.1:8000/api/addevent", this.state.event)
      .then(response => {
        //window.confirm(response.data.added);
        if(response.data.added){
          this.fileUploadHandler(response.data.added);
          window.confirm("The events has been sent for approval");
        }
        else{
          window.confirm("Watch your language!");
        }
      })
      .catch(err => console.log(err));
  }

  componentDidMount(){
    axios
    .get("http://127.0.0.1:8000/api/geteventtypes")
    .then(response =>{
        this.setState({eventTypes: response.data});
    }) 
    .catch(err => console.log(err));
  }

  render(){
    console.log(this.state);
    const {eventTypes} = this.state;
    return (
      <>
        <div className="split left">
          <div className="bgr-transparent parr proff-image">
            <img className="imag-sz" src="" />
          </div>
          <div className="centered">
            <a href="">Personal Data</a><br></br>
            <a href="">Change Password</a><br></br>
            <a href="">My List</a><br></br>
            <a href="">Add Event</a>
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
          <input
            className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
            type="file"
            name="picture"
            id="picture"
            placeholder="Upload Picture"
            onChange={this.fileSelectedHandler}
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
            <input type="button" class="myb brad margin-bottom d-block mr-1 ml-auto" value="Add event" onClick={this.addEvent} />
          </div>
        </div>
      </>
    );
  }
};

export default AddEvents;