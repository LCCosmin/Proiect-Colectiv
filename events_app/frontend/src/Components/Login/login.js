import React from "react";
import "../design.css";
import axios from 'axios'; 

const Login = ({onRouteChange}) =>  {
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
        state.valid = response.data.exists ?  onRouteChange('addevents') : window.confirm("The account does not exist. Please sign up.");
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
      <div className="paddingLoginPage contentLogin">
          <fieldset id="log_in" className="borderLogin centerLoginContent paddingFieldsetContent">
            <legend className="fontTitle paddingFieldsetContent centerLoginTitle">Log in</legend>
            <div className="marginsDivLogin centerLoginContent">
              <input
                className="paddingInputLogin fontInputLogin input-reset borderLogin gray backgroundInputLogin borderInputLogin hover-white-login white-input-login width-100-login"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange = {inputChangeEmail}
              />
            </div>
            <div className="marginsDivLogin centerLoginContent">
              <input
                className="paddingInputLogin fontInputLogin input-reset borderLogin backgroundInputLogin borderInputLogin hover-white-login white-input-login width-100-login"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange = {inputChangePassword}
              />
            </div>
            <div className="line-hight-login marginsDivLogin centerLoginContent">
              <label className="fontLabelLogin line-hight-login white pointer">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#0" className="fontLabelLogin link-login dim white db underline">
                Forgot your password?
              </a>
            </div>
          
          </fieldset>
          <div className="line-hight-login marginsDivLogin centerLoginContent">
            <button className="dimensions-button-login fontLabelLogin borderLogin button-login grow-login pointer display-login mrg-left-buton-login" onClick={checkLogin}> Log In</button>
          </div>
          <div className="line-hight-login marginsDivLogin pad-left-login">
            <label className=" fontLabelLogin line-hight-login white mrg-left-q2-login">
              Don't have an account?
            </label>
            <a href="#0" className="fontLabelLogin link-login dim-login white db-login mrg-left-a-login underline" onClick={() => onRouteChange('signin')}>
              Sign up.
            </a>
          </div>
      </div>
    );
};

export default Login;
