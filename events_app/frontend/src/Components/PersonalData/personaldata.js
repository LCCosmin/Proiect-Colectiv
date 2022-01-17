import React from "react";
import styles from "./personaldata.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

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
        img_name: "no_profile_pic.png",
        facebook: "-",
        instagram: "-",
      },
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
    console.log(this.exists);
    return (
      <>
        <div className="split1 left1">
          <div className="bgr-transparent1 par1 prof-image5">
            <img id="user-img"/>
          </div>
          <div className="centered1">
            <a href="" onClick={() =>{if(this.exists) this.props.navigate("/changepassword/" + this.id); else console.log(1);}}>Change Password</a><br></br>
            <a href="">My List</a><br></br>
            <a href="" onClick={() => {if(this.exists) this.props.navigate("/eventpostuser/" + this.id); else console.log(1);}}>News feed</a>
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
            className="margins1 pad1 fww41 f51 inp-reset1 b11 bgr-transparent1 bc--purple1 hover1-cwhite cwhite1-input width1-85"
            type="text"
            name="facebook"
            id="facebook"
            placeholder="Facebook"
            onChange={this.updateFacebook}
          />
           <input
            className="margins1 pad1 fww41 f51 inp-reset1 b11 bgr-transparent1 bc--purple1 hover1-cwhite cwhite1-input width1-85"
            type="text"
            name="instagram"
            id="instagram"
            placeholder="Instagram"
            onChange={this.updateInstagram}
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
            <input type="button" class="grow-update mybutton1 brad1 d-block1 ml-btn" value="Update Details" onClick={this.updateDetails}/>
          </div>
        </div>
      </>
    );
  }
};

function WithNavigate(props) {
  let navigate = useNavigate();
  return <PersonalData {...props} navigate={navigate} />;
}
export default WithNavigate;