import React from "react";
import styles from "./organiserdata.css";
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class OrganiserData extends React.Component{
  render(){
    return (
      <>
        <div className="split10 left10">
          <div className="bgr-transparent10 par10 prof-image10">
            <img src="" />
          </div>
          <div className="centered10">
            <a href="">Personal Data</a><br></br>
            <a href="">Change Password</a><br></br>
            <a href="">My List</a><br></br>
            <a href="">News feed</a>
          </div>
        </div>
        <div></div>
        <div className="split10 right10">
        <br></br>
          <legend className="f10 fww10 ph10 white10 titlecenter10">Personal Data</legend>
          <br></br>
          <br></br>
          <input
            className="margins10 pad10 fww410 f510 inp-reset10 b110 bgr-transparent10 bc--purple10 hover10-cwhite cwhite10-input width10-85"
            type="text"
            name="organisername"
            id="organisername"
            placeholder="Organiser name"
          />
          <div>
            <input
              className="margins10 pad10 fww410 f510 inp-reset10 b110 bgr-transparent10 bc--purple10 hover10-cwhite cwhite10-input width10-85"
              type="text"
              name="organisationname"
              id="organisationname"
              placeholder="Organisation name"
            />
          </div>
          <input
            className="margins10 pad10 fww410 f510 inp-reset10 b110 bgr-transparent10 bc--purple10 hover10-cwhite cwhite10-input width10-85"
            type="date"
            name="birthday"
            id="birthday"
            placeholder="Birthday"
          />
          <input
            className="margins10 pad10 fww410 f510 inp-reset10 b110 bgr-transparent10 bc--purple10 hover10-cwhite cwhite10-input width10-85"
            type="text"
            name="about"
            id="about"
            placeholder="About"
          />
          <input
            className="margins10 pad10 fww410 f510 inp-reset10 b110 bgr-transparent10 bc--purple10 hover10-cwhite cwhite10-input width10-85"
            type="text"
            name="socialMedia"
            id="socialMedia"
            placeholder="Social Media"
          />
          <input
            className="margins10 pad10 fww410 f510 inp-reset10 b110 bgr-transparent10 bc--purple10 hover10-cwhite cwhite10-input width10-85"
            type="file"
            name="picture"
            id="picture"
            placeholder="Upload Picture"
          />
          <div className="mr10-top">
            <input type="button" class="mybutton10 brad10 d-block10 ml-btn10" value="Update Details"/>
          </div>
        </div>
      </>
    );
  }
};


export default OrganiserData;