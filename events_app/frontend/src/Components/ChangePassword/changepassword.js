import React from "react";
import styles from "./changepassword.css";
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class ChangePassword extends React.Component {

  render(){
    return (
      <>
        <div className="split1 left2">
          <div className="bgr-transparent1 par2 prof-image2">
              <img src="https://s3-alpha-sig.figma.com/img/6a03/487f/fe0efa3177b2f82f4cc3b32042ec4b4d?Expires=1638748800&Signature=T9R5TKUyu3Uq29NsCwIorLnaqLIQQ6G3aHQiaLQ62S3vY5ViXWTPCxnfKPL4eK3SOdAD6PfjzSEC-wCakELfSYVtIvC-7cfLjKxWMCoRnWuK6M~c~V6eOKzN6C~rmVl22jLPMNhrl0M~xonrDd4mte8VDY66r3dO1C2idedOscDPZKISEkbuywPcZJHEDww2F0Mc4GyGS0TxvZSx7QUQnWoItXARqEeB58Se2GKSwA3nCkhW7WE-dAOGByzjteO-ErGIUyxXFlThpYDwzo69qUSGwNConxDUoeF8uLH8snD9kIK-L-Asn~wyy2iOX9a-Xerxe65dvzBKCVE2FVOx7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
          </div>
          <div className="centered2">
            <a href="">Personal Data</a><br></br>
            <a href="">Change Password</a><br></br>
            <a href="">My List</a><br></br>
            <a href="">Add Event</a>
          </div>
        </div>
        <div></div>
        <div className="split2 right2">
          <legend className=" marg-b f42 fww62 ph02 white2 titlecenter2">Change Password</legend>
          <br></br>
          <br></br>
          <input
            className="margins2 pad2 fww42 f52 inp-reset2 b12 bgr-transparent2 bc--purple2 hover2-cwhite cwhite2-input width2-85"
            type="text"
            name="oldpassword"
            id="oldpassword"
            placeholder="Old Password"
          />
            <input
              className="margins2 pad2 fww42 f52 inp-reset2 b12 bgr-transparent2 bc--purple2 hover2-cwhite cwhite2-input width2-85"
              type="text"
              name="newpassword"
              id="newpassword"
              placeholder="New Password"
            />
          <input
            className="margins2 pad2 fww42 f52 inp-reset2 b12 bgr-transparent2 bc--purple2 hover2-cwhite cwhite2-input width2-85"
            type="text"
            name="confirmpassword"
            id="confirmpassword"
            placeholder="Password Confirmation"
          />
          <div className="mr-top2">
            <input type="button" class="mybutton2 brad2 d-block2 mr-12 ml-auto2" value="Change"/>
          </div>
        </div>
      </>
    );
  }
};


export default ChangePassword;