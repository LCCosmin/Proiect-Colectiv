//import logo from './logo.svg';
import { useState, useEffect, Component } from "react";
import "./App.css";


import Login from "./Components/Login/login.js";
import SignIn from "./Components/SignIn/signin.js";
import Home from "./Components/Home/Home.js";
import AddEvents from './Components/AddEvents/addevents.js';
import PersonalData from './Components/PersonalData/personaldata.js'
import ChangePassword from './Components/ChangePassword/changepassword.js'
import Nav from './Components/Navbar/Nav.js';
import AdminNotifications from "./Components/Admin-notifications/Admin-notifications.js";
import Profile1 from "./Components/Profile/profile1.js"
import Profile from "./Components/Profile/profile.js"


const initialState= {
  route: 'home',
  isSignedIn: false
}



class App extends Component{
  constructor(){
    super();
    this.state = initialState;
    // Daca trebuie cuiva linia asta de cod, va rog anuntati @Teodora sau @Cosmin(@Teodora mai mult)
    //this.stateHasAccount = useState(true);
    //this.setStateHasAccount = useState(true);
  }
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'login') {
      this.setState({isSignedIn: false})
    }
    this.setState({route: route});
  }

  // Daca trebuie cuiva linia asta de cod, va rog anuntati @Teodora sau @Cosmin(@Teodora mai mult)
  /*
  useEffect(() => {
    if (localStorage.getItem("UserHasAccount") === '1') {
      setStateHasAccount(true);
    } else if (localStorage.getItem("UserHasAccount") === '0') {
      console.log('aici')
      setStateHasAccount(false);
    }
  }, []);
  */

  // Daca trebuie cuiva linia asta de cod, va rog anuntati @Teodora sau @Cosmin(@Teodora mai mult)
  /*
  userHasAccountHandler = () => {
    this.setStateHasAccount(true);
    localStorage.setItem("UserHasAccount", '1');
  };

  userHasNoAccount = () => {
    this.setStateHasAccount(false);
    localStorage.setItem("UserHasAccount", '0');
  };
  */
  render(){
    const {isSignedIn, route} = this.state;
    return(
      <div>
        {/* <Nav isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        {this.state.route === 'home'
        ? <Home onRouteChange={this.onRouteChange}/>
        :   (this.state.route === 'login'
            ? <Login onRouteChange={this.onRouteChange}/>
            : (this.state.route === 'signin'
              ? <SignIn onRouteChange={this.onRouteChange}/>
              : (this.state.route === 'addevents'
                ? <AddEvents onRouteChange={this.onRouteChange}/> 
              : (this.state.route === 'personaldata'
                ? <PersonalData onRouteChange={this.onRouteChange}/> 
              : (this.state.route === 'changepassword'
                ? <ChangePassword onRouteChange={this.onRouteChange}/>
                : (this.state.route === 'Admin-notifications'
                  ? <AdminNotifications onRouteChange={this.onRouteChange}/>
                  : <Home/>
                  
                  )
                )
              )
            )
          )
        )
      } */}
      <AdminNotifications/>
      </div>
    )
  }
};



export default App;