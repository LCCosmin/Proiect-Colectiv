import React from "react";
import styles from "./addevents.css";
import axios from 'axios'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'



const AddEvents = ({onRouteChange}) =>  {
    
    var state = {
      event: {
        nameEvent: "",
        eventDescription: "",
        eventLocation: "",
        startDateEvent: "",
        endDateEvent: "",
        eventType: "",
        picture: ""
      }
    }

    function updateName(event){
      state.event.nameEvent = event.target.value;
    }

    function updateDescription(event){
      state.event.eventDescription = event.target.value;
    }

    function updateLocation(event){
      state.event.eventLocation = event.target.value;
    }

    function updateStartDate(event){
      state.event.startDateEvent = event.target.value;
    }

    function updateEndDate(event){
      state.event.endDateEvent = event.target.value;
    }

    function updateType(event){
      state.event.eventType = event.target.value;
    }

    // God have Mercy with this function cuz idk what I am doing
    function updatePicture(event){
      state.event.picture = event.target.value;
    }

    function addEventIntoDatabase(){
        
        // Missing eventEndDate + eventType
        // Remove code below when input boxes are added

        state.event.endDateEvent = "2099-11-11T11:11:11";
        state.event.eventType = "religious"; // or perhaps make it an int?

        // ^^ To remove when input boxes are added

        console.log(state.event);
    }

    return (
    <>
      <div class="split left">
        <div class="bgr-transparent par">
        </div>
        <div class="centered">
        <a href="">Personal Data</a><br></br>
        <a href="">Change Password</a><br></br>
        <a href="">My List</a><br></br>
        <a href="">Add Event</a>
        </div>
      </div>
      <div></div>
      <div class="split right">
        <legend className="f4 fww6 ph0 white center">Event details</legend>
        <input 
          className=" margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
          type="text"
          name="Event name"
          id="Name"
          placeholder="Event-name" 
          onChange = {updateName}
         />
         <div>
         <input 
          className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
          type="text"
          name="Location"
          id="Location"
          placeholder="Location"
          onChange = {updateLocation}
         />
         </div>
         <input 
          className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
          type="text"
          name="Price"
          id="Price"
          placeholder="Price"
         />
         <input 
          className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
          type="date"
          name="Date"
          id="Date"
          placeholder="Date and Time"
          onChange = {updateStartDate}
         />
         <input 
          className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
          type="text"
          name="Description"
          id="Description"
          placeholder="Event Description"
          onChange = {updateDescription}
         />
         <input 
          className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
          type="file"
          name="Picture"
          id="Picture"
          placeholder="Upload Picture"
          onChange = {updatePicture}
         />
         <div>
           <input type="button" onclick="" class="button button1 brad d-block mr-0 ml-auto" value="Add event" onClick={addEventIntoDatabase}/>
         </div>
         
      </div>
      
    </>
    );
  };
  
export default AddEvents;