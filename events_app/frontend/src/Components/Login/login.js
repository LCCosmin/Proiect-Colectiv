import React from "react";
import styles from "./login.css";

const Login = (props) => {
  return (
    <div className="pa4 black-80 content asd">
      <form className="measure centram">
        <fieldset id="log_in" className="ba b--transparent centram ph0 mh0">
          <legend className="f4 fw6 ph0 white mrg-left-30">Log in</legend>
          <div className="mt3 centram">
            <input
              className="pa2 fw4 f5 input-reset ba bg-transparent b--purple hover-white gray-input white-input w-100"
              type="email"
              name="email-address"
              id="email-address"
              placeholder="Email"
            />
          </div>
          <div className="mv3 centram">
            <input
              className="pa2 fw4 f5 input-reset ba bg-transparent b--purple hover-white white-input w-100"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="lh-copy mt3 centram">
            <label className="fw4 lh-copy white f5 pointer">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#0" className="fw4 link dim white underline f5 db">
              Forgot your password?
            </a>
          </div>
        </fieldset>
        <div className="lh-copy mt3">
          <input
            className="ph3 pv2 fw4 ba b--purple bg-purple white grow pointer f5 dib mrg-left-16"
            type="submit"
            value="Log in"
          />
        </div>
        <div className="lh-copy mt3 centram">
          <label className=" fw4 centram lh-copy white f5 mrg-left-24">
            Don't have an account?
          </label>
          <a
            href="#0"
            className="fw4 link dim white underline f5 db mrg-left-32"
            onClick={props.onDontHasUser}
          >
            Sign in.
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
