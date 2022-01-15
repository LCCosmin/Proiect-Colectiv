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
import Profile from "./Components/Profile/profile.js";
import ChangePassword from "./Components/ChangePassword/changepassword.js";
import EventPostAdmin from "./Components/EventPostUser/EventPostAdmin.js";
import EventPostUser from "./Components/EventPostUser/EventPostUser.js";
import EventPostOrganiser  from "./Components/EventPostUser/EventPostOrganiser.js";
import EventProfile from "./Components/EventProfile/EventProfile.js";
import PersonalData from "./Components/PersonalData/personaldata.js";
import AdminFeed from "./Components/Admin-feed/Admin-feed.js";
import Ads from "./Components/Ads/Ads.js";
import Filter from './Components/FilterEvents/filter.js';
import ParticipantsList from './Components/Participants-list/Participants-list.js';
import OrganiserData from './Components/OrganiserData/organiserdata.js';
import ModifyEventData from "./Components/ModifyEvent/ModifyEvent.js";



class App extends Component {
  constructor() {
    super();
    this.state = {
      user: { id: 0 },
    };
  }

  render() {
    return (
      <div>
         <Router>
          <Routes>
            <Route exact path="/" element={<Home loggedUser={this.state} />} />
            <Route
              exact
              path="/signin"
              element={<SignIn loggedUser={this.state} />}
            />
            <Route
              exact
              path="/login"
              element={<Login loggedUser={this.state} />}
            />
            <Route
              exact
              path="/addevents"
              element={<AddEvents loggedUser={this.state} />}
            />
            <Route
              exact
              path="/adminfeed"
              element={<AdminFeed loggedUser={this.state} />}
            />
            <Route
              exact
              path="/adminnotifications"
              element={<AdminNotifications loggedUser={this.state} />}
            />
            <Route
              exact
              path="/changepassword"
              element={<ChangePassword loggedUser={this.state} />}
            />
            <Route
              exact
              path="/eventpostadmin"
              element={<EventPostAdmin loggedUser={this.state} />}
            />
            <Route
              exact
              path="/eventpostuser"
              element={<EventPostUser loggedUser={this.state} />}
            />
            <Route
              exact
              path="/eventprofile"
              element={<EventProfile loggedUser={this.state} />}
            />
            <Route
              exact
              path="/personaldata"
              element={<PersonalData loggedUser={this.state} />}
            />
            <Route
              exact
              path="/profile"
              element={<Profile loggedUser={this.state} />}
            />
            <Route
              exact
              path="/eventpostorganiser"
              element={<EventPostOrganiser loggedUser={this.state} />}
            />
             <Route
              exact
              path="/modifyevent"
              element={<ModifyEventData loggedUser={this.state} />}
            />
          </Routes>
        </Router>
        {/* <PersonalData/>  */}
        {/* <EventProfile/> */}
        {/* <Filter/> */}
        <Ads/>
      </div>
    );
  }
}

export default App;
