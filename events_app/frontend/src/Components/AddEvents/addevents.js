import React from "react";
import "./addevents.css";
import axios from 'axios'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'



const AddEvents = ({ onRouteChange }) => {

  var state = {
    event: {
      name: "",
      id_organizer: 2,
      start_date: "",
      end_date: "",
      location: "",
      description: "",
      id_type: 1,
      status: "pending",
    },
    valid: "",
  }

  function updateName(event) {
    state.event.name = event.target.value;
  }

  function updateDescription(event) {
    state.event.description = event.target.value;
  }

  function updateLocation(event) {
    state.event.location = event.target.value;
  }

  function updateStartDate(event) {
    state.event.start_date = event.target.value;
  }

  function updateEndDate(event) {
    state.event.end_date = event.target.value;
  }

  function updateType(event) {
    state.event.id_type = event.target.value;
  }

  // God have Mercy with this function cuz idk what I am doing
  function updatePicture(event) {
    state.event.picture = event.target.value;
  }

  function addEvent() {

    // Missing eventEndDate + eventType
    // Remove code below when input boxes are added


    state.event.end_date = "2099-11-11T11:11";
    state.event.id_type = 1; // or perhaps make it an int?
    // ^^ To remove when input boxes are added

    axios
      .post("http://127.0.0.1:8000/api/addevent", state.event)
      .then(response => {
        state.valid = response.data.added ? window.confirm("The event has been added successfully!") : window.confirm("The event has not been added!");
      })
      .catch(err => console.log(err));

    console.log(state.event);
  }

  return (
    <>
      <div className="split left">
        <div className="bgr-transparent par"></div>
        <div className="centered">
          <a href="">Personal Data</a><br></br>
          <a href="">Change Password</a><br></br>
          <a href="">My List</a><br></br>
          <a href="">Add Event</a>
        </div>
      </div>
      <div></div>
      <div className="split right">
        <legend className="f4 fww6 ph0 white titlecenter">Event details</legend>
        <input
          className=" margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
          type="text"
          name="name"
          id="name"
          placeholder="Event-name"
          onChange={updateName}
        />
        <div>
          <input
            className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
            type="text"
            name="description"
            id="description"
            placeholder="Event Description"
            onChange={updateDescription}
          />
          <input
            className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            onChange={updateLocation}
          />
        </div>
        <input
          className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
          type="datetime-local"
          name="date"
          id="date"
          placeholder="Date"
          onChange={updateStartDate}
        />
        <input
          className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
          type="datetime-local"
          name="date"
          id="date"
          placeholder="Date"
          onChange={updateEndDate}
        />
        <input
          className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
          type="file"
          name="picture"
          id="picture"
          placeholder="Upload Picture"
          onChange={updatePicture}
        />
        <br></br>
        <br></br>
        <br></br>
        <label for="events" className="ev-type hover-cwhite cwhite-input input-event" onChange={updateType}>Choose an event type 
        <select className="tab hover-white-event input-event">
          <option value="event0" className="" disabled selected hidden>Event type</option>
          <option value="event1" className="">Event 1</option>
          <option value="event2" className="">Event 2</option>
          <option value="event3" className="">Event 3</option>
          <option value="event4" className="">Event 4</option>
        </select>
        </label>
        <div>
          <input type="button" class="mybutton brad d-block mr-1 ml-auto" value="Add event" onClick={addEvent} />
        </div>
      </div>
    </>
  );
};

export default AddEvents;