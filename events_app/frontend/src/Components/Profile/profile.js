import React, { Component } from 'react'
import './profile.css'
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import axios from 'axios'; 

class Profile extends Component {
    constructor(){
        super();
        this.state = {
            user:[],
            connectionisactive : false
        }
        this.id = 0;
        this.handleconnection = this.handleconnection.bind(this)
    }

    getAge(dob){
        let birthdate = new Date(dob);
        let now = new Date();
        var diff =(now.getTime() - birthdate.getTime()) / 1000;
        diff /= (60 * 60 * 24);
        return Math.abs(Math.round(diff/365.25));
    }

    componentDidMount(){
        this.id = window.location.href.split('/').at(-1);
        axios
        .post("http://127.0.0.1:8000/api/getuserinfo", {id: this.id})
        .then(response => {
            this.setState({user: response.data});
        })
        .catch(err => console.log(err));
    }

    handleconnection(){
        this.setState({connectionisactive: true})
        console.log(this.connectionisactive)}

    render() {
        const {user} = this.state;
        return ( 
            <div>
                <div className="container-box">
                    <img src="http://placekitten.com/g/600/300" id="profile-back-photo" alt="Photo of a kitten looking menacing."/>
                    <div className="profile-image">
                        <img src={"/images/"+ user.img_name}/>
                    </div>
                    <div className='profile-details'>
                        <p style={{"fontSize":"24px"}}>{user.first_name + ' ' + user.last_name}</p>
                        <p style={{"fontSize":"13px"}}>User</p>
                        <p style={{"fontSize":"18px"}}>Age: {this.getAge(user.dob)}</p>
                        <p style={{"fontSize":"24px","marginTop":"20px"}}>BIO</p>
                        <p className ='profile-description'>{user.about}</p>
                        <div className = "profile-icons">
                          <a href="https://tex.stackexchange.com/questions/55210/not-element-of-in-latin-modern" className="icon"><h3 className="icon" id={this.state.connectionisactive == true ? 'pressicons': null}> <FaFacebookSquare/> </h3></a>
                          <a href="https://tex.stackexchange.com/questions/55210/not-element-of-in-latin-modern" className="icon"><h3 className="icon" id={this.state.connectionisactive == true ? 'pressicons': null}> <BsInstagram/> </h3></a>
                          <button className="profile-button" id={this.state.connectionisactive == true ? 'pushbutton': null} onClick={this.handleconnection}>Connect</button>
                          <button className="settings-button">⚙️</button>
                          <cog/>
                        </div>
                          
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;