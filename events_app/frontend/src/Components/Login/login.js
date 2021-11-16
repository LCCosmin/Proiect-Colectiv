import React from "react";
import styles from "./login.css";
import axios from 'axios'; 

const Login = (props) =>  {
  var state = {

    item: {
      email: "",
      password: ""
    },
     
    valid: ""
  };
  
  function checkLogin (){
    axios
      .post("http://127.0.0.1:8000/api/login", state.item)
      .then(response =>{
        state.valid = response.data.exists ? 'exista!' : 'nu exista!';
        // state.valid = response.data;
        // console.log(state.valid);
      }) 
      .catch(err => console.log(err));
  };

  function inputChangeEmail (event){
    state.item.email = event.target.value;
  };

  function inputChangePassword (event){
    state.item.password = event.target.value;
  };

  return (
      <div className="pa4 black-80 content">
          <fieldset id="log_in" className="ba b--transparent center ph0 mh0">
            <legend className="f4 fw6 ph0 white center2">Log in</legend>
            <div className="mt3 center">
              <input
                className="pa2 fw4 f5 input-reset ba bg-transparent b--purple hover-white white-input w-100"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange = {inputChangeEmail}
              />
            </div>
            <div className="mv3 center">
              <input
                className="pa2 fw4 f5 input-reset ba bg-transparent b--purple hover-white white-input w-100"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange = {inputChangePassword}
              />
            </div>
            <div className="lh-copy mt3 next center">
              <label className="fw4 lh-copy white f5 pointer">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#0" className="fw4 link dim white underline f5 db">
                Forgot your password?
              </a>
            </div>
          
          </fieldset>
          <div className="lh-copy mt3 center">
            <button className="ph3 pv2 fw4 ba b--purple bg-purple white grow pointer f5 dib mrg-left-8" onClick={checkLogin}> Log In</button>
          </div>
          <div className="lh-copy mt3 next center pad-left">
            <label className=" fw4 center lh-copy white f5 ">
              Don't have an account?
            </label>
            <a href="#0" className="fw4 link dim white underline f5 db" onClick={props.onDontHasUser}>
              Sign in.
            </a>
          </div>
      </div>
    );
};

export default Login;
