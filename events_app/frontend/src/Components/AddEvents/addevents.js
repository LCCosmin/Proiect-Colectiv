import React from "react";
import styles from "./addevents.css";
import axios from 'axios'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'



const AddEvents = ({onRouteChange}) =>  {
    
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
         />
         <div>
         <input 
          className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
          type="text"
          name="Location"
          id="Location"
          placeholder="Location"
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
         />
         <input 
          className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
          type="text"
          name="Description"
          id="Description"
          placeholder="Event Description"
         />
         <input 
          className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
          type="file"
          name="Picture"
          id="Picture"
          placeholder="Upload Picture"
         />
         <div>
           <input type="button" onclick="" class="button button1 brad d-block mr-0 ml-auto" value="Add event" onClick={() => onRouteChange('Admin-notifications')}/>
         </div>
         
      </div>
      
    </>
    );
  };
  
export default AddEvents;