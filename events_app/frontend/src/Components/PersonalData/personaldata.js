import React from "react";
import styles from "./personaldata.css";
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class PersonalData extends React.Component{
  render(){
    return (
      <>
        <div className="split1 left1">
          <div className="bgr-transparent1 par1 img-pos3">
          <div className="prof-image">
                <img src="https://s3-alpha-sig.figma.com/img/6a03/487f/fe0efa3177b2f82f4cc3b32042ec4b4d?Expires=1638748800&Signature=T9R5TKUyu3Uq29NsCwIorLnaqLIQQ6G3aHQiaLQ62S3vY5ViXWTPCxnfKPL4eK3SOdAD6PfjzSEC-wCakELfSYVtIvC-7cfLjKxWMCoRnWuK6M~c~V6eOKzN6C~rmVl22jLPMNhrl0M~xonrDd4mte8VDY66r3dO1C2idedOscDPZKISEkbuywPcZJHEDww2F0Mc4GyGS0TxvZSx7QUQnWoItXARqEeB58Se2GKSwA3nCkhW7WE-dAOGByzjteO-ErGIUyxXFlThpYDwzo69qUSGwNConxDUoeF8uLH8snD9kIK-L-Asn~wyy2iOX9a-Xerxe65dvzBKCVE2FVOx7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
              </div>
          </div>
          <div className="centered1">
            <a href="">Personal Data</a><br></br>
            <a href="">Change Password</a><br></br>
            <a href="">My List</a><br></br>
            <a href="">Add Event</a>
          </div>
        </div>
        <div></div>
        <div className="split1 right1">
        <br></br>
          <legend className="f41 fww61 ph01 white1 titlecenter1">Personal Data</legend>
          <br></br>
          <br></br>
          <input
            className="margins1 pad1 fww41 f51 inp-reset1 b11 bgr-transparent1 bc--purple1 hover1-cwhite cwhite1-input width1-85"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
          />
          <div>
            <input
              className="margins1 pad1 fww41 f51 inp-reset1 b11 bgr-transparent1 bc--purple1 hover1-cwhite cwhite1-input width1-85"
              type="text"
              name="surname"
              id="surname"
              placeholder="Surname"
            />
          </div>
          <input
            className="margins1 pad1 fww41 f51 inp-reset1 b11 bgr-transparent1 bc--purple1 hover1-cwhite cwhite1-input width1-85"
            type="datetime-local"
            name="birthday"
            id="birthday"
            placeholder="Birthday"
          />
          <input
            className="margins1 pad1 fww41 f51 inp-reset1 b11 bgr-transparent1 bc--purple1 hover1-cwhite cwhite1-input width1-85"
            type="text"
            name="about"
            id="about"
            placeholder="About"
          />
          <div className="mr-top">
            <input type="button" class="mybutton1 brad1 d-block1 mr-111 ml-auto1" value="Update Details"/>
          </div>
        </div>
      </>
    );
  }
};


export default PersonalData;