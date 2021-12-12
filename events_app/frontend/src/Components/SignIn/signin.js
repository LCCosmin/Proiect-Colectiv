import React from "react";
import "./signin.css";
import {useNavigate} from "react-router-dom";

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
}

function SignIn () {
  let navigate = useNavigate();
  return (
    <div className="paddingFormSignIn contentSignIn">
      <form className="centerSignIn widthSignInForm">
        <fieldset id="sign_up" className="borderSignInForm centerSignIn paddingSignInFieldset">
          <legend className="formatTitleSignIn centerTitleSignIn">Sign up</legend>
          <div className= "marginsSignIn centerSignIn">
          <select className="formatInputSignIn borderSignIninput backgroundInputSignIn borderSignIn hover-white-signIn input-signin width-dropdown-signin" name="type" id="userType">
              <option value="" disabled selected hidden>Sign in as</option>
              <option value="1">Organiser</option>
              <option value="2">User</option>
            </select>
          </div>
          <div className="marginsSignIn centerSignIn">
            <input
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
              onChange={check_pass}
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
          <button
            class="dimensionsButtonSignIn formatInputSignIn borderSignIninput borderSignIn white pointer-signin display-inline-signin mrg-left-button-signin"
            type="submit"
            id= "submit"
            value="Sign up"
            disabled
          >
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
      </form>
    </div>
  );
};

export default SignIn;
