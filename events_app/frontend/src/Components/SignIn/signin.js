import React from "react";
import "./signin.css";
import {useNavigate} from "react-router-dom";
import axios from 'axios';


function SignIn () {
  let navigate = useNavigate();
  var state = {
    email: null,
    username: null,
    password: null,
    id_role: null,
    id_user_info: null,
    id_rating: null,
    notifications: null,
    status: null
  };
  
  function makeSignIn() {
    axios
      .post("http://127.0.0.1:8000/api/signin", state)
      .then(response => {
        console.log(response.data.exists);
        if (response.data.exists === true)
            window.confirm("The account was created successfully.");
        else
            window.confirm("An account with this email already exists.");
      })
      .catch(err => console.log(err));
  };

  function changeRole(event) {
    if(event.target.value === "2") {
      state.status = "pending";
    }
    else{
      console.log("bufnita");
      state.status = "accepted";
    }
      state.id_role = event.target.value;
      console.log(event.target.value);
  };
  
  function changeEmail(event) {
    state.email = event.target.value;
    console.log(event.target.value);
  };
  
  function changePassword(event) {
    state.password = event.target.value;
    console.log(event.target.value);
  };
  
  function check_pass() {
    if (
      document.getElementById("password").value ==
      document.getElementById("passwordConfirmation").value
    ) {
      {
        document.getElementById("submit").disabled = false;
      }
    } else {
      document.getElementById("submit").disabled = true;
    }
  };

  
  return (
    <div className="paddingFormSignIn contentSignIn">
        <fieldset id="sign_up" className="borderSignInForm centerSignIn paddingSignInFieldset">
          <legend className="formatTitleSignIn centerTitleSignIn">Sign up</legend>
          <div className= "marginsSignIn centerSignIn">
          <select onChange={changeRole} className="formatInputSignIn borderSignIninput backgroundInputSignIn borderSignIn hover-white-signIn input-signin width-dropdown-signin" name="type" id="userType">
              <option value="" disabled selected hidden>Sign in as</option>
              <option value="2">Organiser</option>
              <option value="3">User</option>
            </select>
          </div>
          <div className="marginsSignIn centerSignIn">
            <input
              onChange={changeEmail}
              className="formatInputSignIn paddingInputSignIn input-reset borderSignIninput backgroundInputSignIn borderSignIn hover-white-signIn input-signin width-input-signin"
              type="email"
              name="email-address"
              id="email-address"
              placeholder="Email"
            />
          </div>
          <div className="marginsSignIn centerSignIn">
            <input
              className="formatInputSignIn paddingInputSignIn input-reset borderSignIninput backgroundInputSignIn borderSignIn hover-white-signIn input-signin width-input-signin"
              type="password"
              name="password"
              id="password"
              //onChange={check_pass}
              onChange={changePassword}
              placeholder="Password"
            />
          </div>
          <div className="marginsSignIn centerSignIn">
            <input
              className="formatInputSignIn paddingInputSignIn input-reset borderSignIninput backgroundInputSignIn borderSignIn hover-white-signIn input-signin width-input-signin"
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              onChange={check_pass}
              placeholder="Confirm password"
            />
            <span id="message"></span>
          </div>
          <label className="formatLabelSignIn lineHeight-signin white pointer-signin">
            <input type="checkbox" /> Remember me
          </label>
        </fieldset>
        <div className="lineHeight-signin marginsSignIn centerSignIn">
          <button class="dimensionsButtonSignIn formatInputSignIn borderSignIninput borderSignIn white pointer-signin display-inline-signin mrg-left-button-signin" id= "submit" onClick={makeSignIn}>
            Sign up
          </button>
        </div>
        <div className="lineHeight-signin marginsSignIn centerSignIn">
          <label href="#0" className="formatLabelSignIn lineHeight-signin white mrg-left-q1">
            Already have an account?
          </label>
          <a href="#0" className="formatLabelSignIn borderSignInLink link-signin dim-signin white underline mrg-left-link-log display-block-signin" onClick={() => {navigate('/login')}}>
            Log in.
          </a>
        </div>
    </div>
  );
};

export default SignIn;
