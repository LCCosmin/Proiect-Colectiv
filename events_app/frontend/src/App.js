//import logo from './logo.svg';
import { useState, useEffect, Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/login.js";
import SignIn from "./Components/SignIn/signin.js";
import Home from "./Components/Home/Home.js";
import AddEvents from "./Components/AddEvents/addevents.js";
import Nav from "./Components/Navbar/Nav.js";
import AdminNotifications from "./Components/Admin-notifications/Admin-notifications.js";
import Profile from "./Components/Profile/profile.js"
import ChangePassword from "./Components/ChangePassword/changepassword.js";
import EventPostAdmin from "./Components/EventPostUser/EventPostAdmin.js";
import EventPostUser from "./Components/EventPostUser/EventPostUser.js";
import EventProfile from "./Components/EventProfile/EventProfile.js";
import PersonalData from "./Components/PersonalData/personaldata.js";
import AdminFeed from "./Components/Admin-feed/Admin-feed.js";
import Filter from './Components/FilterBar/filter.js';

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/signin" element={<SignIn/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/addevents" element={<AddEvents/>}/>
              <Route exact path="/adminfeed" element={<AdminFeed/>}/>
              <Route exact path="/adminnotifications" element={<AdminNotifications/>}/>
              <Route exact path="/changepassword" element={<ChangePassword/>}/>
              <Route exact path="/eventpostadmin" element={<EventPostAdmin/>}/>
              <Route exact path="/eventpostuser" element={<EventPostUser/>}/>
              <Route exact path="/eventprofile" element={<EventProfile/>}/>
              <Route exact path="/personaldata" element={<PersonalData/>}/>
              <Route exact path="/profile" element={<Profile/>}/>
            </Routes>
          </Router>
          {/* <PersonalData/>  */}
          {/* <EventProfile/> */}
          {/* <Filter/> */}
      </div>
    )
  }
}



export default App;