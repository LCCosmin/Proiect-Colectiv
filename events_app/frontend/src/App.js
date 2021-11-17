import Nav from './Components/Navbar/Nav';
import AdminNotifications from './Components/Admin-notifications/Admin-notifications'
//import logo from './logo.svg';
import { useState, useEffect } from "react";
import "./App.css";

import Home from "./Components/Home/Home.js";
import Login from "./Components/Login/login.js";
import SignIn from "./Components/SignIn/signin";


const initialState= {
  route: 'home',
  isSignedIn: false
}



const App = () => {
  const [stateHasAccount, setStateHasAccount] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("UserHasAccount") === '1') {
      setStateHasAccount(true);
    } else if (localStorage.getItem("UserHasAccount") === '0') {
      console.log('aici')
      setStateHasAccount(false);
    }
  }, []);

  const userHasAccountHandler = () => {
    setStateHasAccount(true);
    localStorage.setItem("UserHasAccount", '1');
  };

  const userHasNoAccount = () => {
    setStateHasAccount(false);
    localStorage.setItem("UserHasAccount", '0');
  };

  return (
    <div>
      {stateHasAccount && <Login onDontHasUser={userHasNoAccount} />}
      {!stateHasAccount && <SignIn onHasUser={userHasAccountHandler} />}
    </div>
  );
};

export default App;
