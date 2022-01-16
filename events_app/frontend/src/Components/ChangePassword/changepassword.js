import React from "react";
import styles from "./changepassword.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class ChangePassword extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.id = window.location.href.split('/').at(-1);
    
  }

  render(){
    return (
      <>
        <div className="split1 left2">
          <div className="bgr-transparent1 par2 prof-image2">
              <img src="/images/no_profile_pic.png" />
          </div>
          <div className="centered2">
            <a href="" onClick={() => this.props.navigate("/personaldata/" + this.id)}>Personal Data</a><br></br>
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
            <input type="button" className="grow-change mybutton2 brad2 d-block2 mr-12 ml-auto2" value="Change"/>
          </div>
        </div>
      </>
    );
  }
};


function WithNavigate(props) {
  let navigate = useNavigate();
  return <ChangePassword {...props} navigate={navigate} />;
}
export default WithNavigate;