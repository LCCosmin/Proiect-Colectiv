import React from "react";
import styles from "./personaldata.css";
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class PersonalData extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      info: {
        id_user: 1,
        first_name: "",
        last_name: "",
        dob: "",
        about: "",
        img_name: "abc",
      },
    }
  }

  updateFirstName = event => {
    this.state.info.first_name = event.target.value;
  }

  updateLastName = event => {
    this.state.info.last_name = event.target.value;
  }

  updateDob = event => {
    this.state.info.dob = event.target.value;
  }

  updateAbout = event => {
    this.state.info.about = event.target.value;
  }

  fileSelectedHandler = event => {
    this.state.info.img_name = event.target.files[0];
  }

  updateDetails = () => {
    // this.aux = this.state.event.img_name;
    // this.state.event.img_name = this.state.event.img_name.name.split(".")[1];
    axios
      .post("http://127.0.0.1:8000/api/updatepersonaldata", this.state.info)
      .then(response => {
        //window.confirm(response.data.added);
        if(response.data.updated){
          // this.fileUploadHandler(response.data.updated);
          window.confirm("Your personal data has been updated!");
        }
        else{
          window.confirm("Watch your language!");
        }
      })
      .catch(err => console.log(err));
  }

  componentDidMount(){
    this.state.info.id_user = this.props.loggedUser.user.id;
  }

  render(){
    return (
      <>
        <div className="split1 left1">
          <div className="bgr-transparent1 par1 img-pos3">
          <div className="prof-image">
                <img src="/images/no_profile_pic.png" />
              </div>
          </div>
          <div className="centered1">
            <a href="">Personal Data</a><br></br>
            <a href="">Change Password</a><br></br>
            <a href="">My List</a><br></br>
            <a href="">News feed</a>
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
            placeholder="First name"
            onChange={this.updateFirstName}
          />
          <div>
            <input
              className="margins1 pad1 fww41 f51 inp-reset1 b11 bgr-transparent1 bc--purple1 hover1-cwhite cwhite1-input width1-85"
              type="text"
              name="surname"
              id="surname"
              placeholder="Last name"
              onChange={this.updateLastName}
            />
          </div>
          <input
            className="margins1 pad1 fww41 f51 inp-reset1 b11 bgr-transparent1 bc--purple1 hover1-cwhite cwhite1-input width1-85"
            type="date"
            name="birthday"
            id="birthday"
            placeholder="Birthday"
            onChange={this.updateDob}
          />
          <input
            className="margins1 pad1 fww41 f51 inp-reset1 b11 bgr-transparent1 bc--purple1 hover1-cwhite cwhite1-input width1-85"
            type="text"
            name="about"
            id="about"
            placeholder="About"
            onChange={this.updateAbout}
          />
          <input
            className="margins pad fww4 f5 inp-reset b1 bgr-transparent bc--purple hover-cwhite cwhite-input width-85"
            type="file"
            name="picture"
            id="picture"
            placeholder="Upload Picture"
            onChange={this.fileSelectedHandler}
          />
          <div className="mr-top">
            <input type="button" class="mybutton1 brad1 d-block1 mr-111 ml-auto1" value="Update Details" onClick={this.updateDetails}/>
          </div>
        </div>
      </>
    );
  }
};


export default PersonalData;