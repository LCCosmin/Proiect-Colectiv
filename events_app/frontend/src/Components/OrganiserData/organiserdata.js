import React from "react";
import styles from "./organiserdata.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class OrganiserData extends React.Component{
  constructor(){
    super();
    this.state = {
      info: {
        id_user: 1,
        first_name: "",
        last_name: "",
        dob: "",
        about: "",
        img_name: "no_profile_pic.png",
        facebook: "-",
        instagram: "-",
      },
        types: [],
    }
    this.id = 0;
    this.aux = '';
    this.exists = false;
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

  updateFacebook = event => {
    this.state.info.facebook = event.target.value;
  }

  updateInstagram = event => {
    this.state.info.instagram = event.target.value;
  }

  fileSelectedHandler = event => {
    this.state.info.img_name = event.target.files[0];
  }

  fileUploadHandler = (name) =>{
    const fd = new FormData();
    this.state.info.img_name = this.aux;
    fd.append('image', this.state.info.img_name, name + "." +this.state.info.img_name.name.split(".")[1]);
    axios
      .post("http://127.0.0.1:8000/api/uploadimage", fd)
      .then(response =>{
      })
      .catch(err => console.log(err));
  }

  updateDetails = () => {
    this.aux = this.state.info.img_name;
    this.state.info.img_name = this.state.info.img_name.name.split(".")[1];
    this.state.info.id_user = this.id;
    this.state.info.first_name = document.getElementById("firstname").value;
    this.state.info.last_name = document.getElementById("surname").value;
    this.state.info.dob = document.getElementById("birthday").value;
    this.state.info.about = document.getElementById("about").value;
    this.state.info.facebook = document.getElementById("facebook").value ? document.getElementById("facebook").value : '-';
    this.state.info.instagram = document.getElementById("instagram").value ? document.getElementById("instagram").value : '-';
    axios
      .post("http://127.0.0.1:8000/api/updatepersonaldata", this.state.info)
      .then(response => {
        if(response.data.updated){
          this.fileUploadHandler(response.data.updated);
          window.confirm("Your personal data has been updated!");
          window.location.reload();
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
    .post("http://127.0.0.1:8000/api/getpersonaldata", {id_user: this.id})
    .then(response => {
     if(response.data.exists == true){
      document.getElementById("firstname").value = response.data.first_name;
      document.getElementById("surname").value = response.data.last_name;
      document.getElementById("birthday").value = response.data.dob;
      document.getElementById("about").value = response.data.about;
      document.getElementById("facebook").value = response.data.facebook != '-' ? response.data.facebook : '';
      document.getElementById("instagram").value = response.data.instagram != '-'  ? response.data.instagram : '';
      document.getElementById("user-img").src = "/images/" + response.data.img_name;
      this.exists = true;
     }else{
       this.exists = false;
     }
    })
    .catch(err => console.log(err));
  }

  render(){
    return (
      <>
        <div className="split10 left10">
          <div className="bgr-transparent10 par10 prof-image10">
            <img id="user-img" src="/images/no_profile_pic.png" />
          </div>
          <div className="centered10">
            <a href="" onClick={() => this.props.navigate("/addevents/" + this.id)}>Add event</a><br></br>
            <a href="">My List</a><br></br>
            <a href="" onClick={() => this.props.navigate("/eventpostuser/" + this.id)}>News feed</a>
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
            onChange={this.updateFirstName}
          />
          <div>
            <input
              className="margins10 pad10 fww410 f510 inp-reset10 b110 bgr-transparent10 bc--purple10 hover10-cwhite cwhite10-input width10-85"
              type="text"
              name="organisationname"
              id="organisationname"
              placeholder="Organisation name"
              onChange={this.updateLastName}
            />
          </div>
          <input
            className="margins10 pad10 fww410 f510 inp-reset10 b110 bgr-transparent10 bc--purple10 hover10-cwhite cwhite10-input width10-85"
            type="date"
            name="birthday"
            id="birthday"
            placeholder="Birthday"
            onChange={this.updateDob}
          />
          <input
            className="margins10 pad10 fww410 f510 inp-reset10 b110 bgr-transparent10 bc--purple10 hover10-cwhite cwhite10-input width10-85"
            type="text"
            name="about"
            id="about"
            placeholder="About"
            onChange={this.updateAbout}
          />
          <input
            className="margins10 pad10 fww410 f510 inp-reset10 b110 bgr-transparent10 bc--purple10 hover10-cwhite cwhite10-input width10-85"
            type="text"
            name="facebook"
            id="facebook"
            placeholder="Facebook"
            onChange={this.updateFacebook}
          />
          <input
            className="margins10 pad10 fww410 f510 inp-reset10 b110 bgr-transparent10 bc--purple10 hover10-cwhite cwhite10-input width10-85"
            type="text"
            name="Instagram"
            id="Instagram"
            placeholder="Instagram"
            onChange={this.updateInstagram}
          />
          <input
            className="margins10 pad10 fww410 f510 inp-reset10 b110 bgr-transparent10 bc--purple10 hover10-cwhite cwhite10-input width10-85"
            type="file"
            name="picture"
            id="picture"
            placeholder="Upload Picture"
            onChange={this.fileSelectedHandler}
          />
          <div className="mr10-top">
            <input type="button" class="grow-modify mybutton10 brad10 d-block10 ml-btn10" value="Update Details"/>
          </div>
        </div>
      </>
    );
  }
};


function WithNavigate(props) {
  let navigate = useNavigate();
  return <OrganiserData {...props} navigate={navigate} />;
}
export default WithNavigate;