import React from "react";
import styles from "./signin.css";
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

const SignIn = props => {
  return (
    <div className="pa4 black-80 content">
      <form className="center width1">
        <fieldset id="sign_up" className="ba b--transparent center ph0 mh0">
          <legend className="f4 fw6 ph0 white center2">Sign in</legend>
          <div className= "mt3 center">
          <select className="pa2 fw4 f5 ba bg-transparent b--purple hover-white white-input w-custom" name="type" id="userType">
              <option value="" disabled selected hidden>Sign in as</option>
              <option value="organiser">Organiser</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="mt3 center">
            <input
              className="pa2 fw4 f5 input-reset ba bg-transparent b--purple hover-white white-input w-85"
              type="email"
              name="email-address"
              id="email-address"
              placeholder="Email"
            />
          </div>
          <div className="mt3 center">
            <input
              className="pa2 fw4 f5 input-reset ba bg-transparent  b--purple hover-white white-input w-85"
              type="password"
              name="password"
              id="password"
              onChange={check_pass}
              placeholder="Password"
            />
          </div>
          <div className="mt3 center">
            <input
              className="pa2 fw4 f5 input-reset ba bg-transparent b--purple hover-white white-input w-85"
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              onChange={check_pass}
              placeholder="Confirm password"
            />
            <span id="message"></span>
          </div>
          <label className="fw4 lh-copy white f5 pointer">
            <input type="checkbox" /> Remember me
          </label>
        </fieldset>
        <div className="lh-copy mt3 center">
          <button
            class="ph3 pv2 fw4 ba b--purple bg-purple white pointer f5 dib mrg-left-8"
            type="submit"
            id= "submit"
            value="Sign in"
            disabled
          >
            Sign in
          </button>
        </div>
        <div className="lh-copy mt3 center">
          <label href="#0" className="fw4 lh-copy white margin-left f5">
            Already have an account?
          </label>
          <a href="#0" className="fw4 link dim white underline f5 margin-left2 db" onClick={props.onHasUser}>
            Log in.
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
