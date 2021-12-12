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
import PersonalData from './Components/PersonalData/personaldata.js'

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
<<<<<<< HEAD
        {/* <Nav isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        {this.state.route === 'home'
        ? <Home onRouteChange={this.onRouteChange}/>
        :   (this.state.route === 'login'
            ? <Login onRouteChange={this.onRouteChange}/>
            : (this.state.route === 'signin'
              ? <SignIn onRouteChange={this.onRouteChange}/> */}
              {/* : (this.state.route === 'addevents'
                ? <AddEvents onRouteChange={this.onRouteChange}/> */}
              {/* : (this.state.route === 'personaldata'
                ? <PersonalData onRouteChange={this.onRouteChange}/> */}
              {/* : (this.state.route === 'changepassword'
                ? <ChangePassword onRouteChange={this.onRouteChange}/> */}
                {/* : (this.state.route === 'Admin-notifications'
                  ? <AdminNotifications onRouteChange={this.onRouteChange}/>
                  : <Home/>
                  
                  )
                )
              )
          ) */}
          {/* <AdminNotifications/> */}
          <Filter />
          {/* <AddEvents/> */}
          {/* <Profile/> */}

      {/* } */}
=======
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
>>>>>>> 063a625a372472501150990e834909a42d6c5ff5
      </div>
    )
  }
}



export default App;