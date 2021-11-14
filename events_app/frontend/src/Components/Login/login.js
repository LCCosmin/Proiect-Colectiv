import React, { Fragment } from "react";
import styles from "./login.css";

class Login extends React.Component {
  render(){
    return (
      <div class="pa4 black-80 content">
        <form class="measure center">
          <fieldset id="log_in" class="ba b--transparent center ph0 mh0">
            <legend class="f4 fw6 ph0 white center2">Log in</legend>
            <div class="mt3 center">
              <input
                class="pa2 fw4 f5 input-reset ba bg-transparent b--purple hover-white white-input w-100"
                type="email"
                name="email-address"
                id="email-address"
                placeholder="Email"
              />
            </div>
            <div class="mv3 center">
              <input
                class="pa2 fw4 f5 input-reset ba bg-transparent b--purple hover-white white-input w-100"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div class="lh-copy mt3 next center">
              <label class="fw4 lh-copy white f5 pointer">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#0" class="fw4 link dim white underline f5 db">
                Forgot your password?
              </a>
            </div>
          </fieldset>
          <div class="lh-copy mt3 center">
            <input
              class="ph3 pv2 fw4 ba b--purple bg-purple white grow pointer f5 dib mrg-left-8"
              type="submit"
              value="Log in"
            />
          </div>
          <div class="lh-copy mt3 next center pad-left">
            <label class=" fw4 center lh-copy white f5 ">
              Don't have an account?
            </label>
            <a href="#0" class="fw4 link dim white underline f5 db">
              Sign in.
            </a>
          </div>
        </form>
      </div>
    );
  }
};

export default Login;
