import React from "react";
import "./login.css";
import axios from 'axios'; 
import {useNavigate} from "react-router-dom";


function Login () {
  let navigate = useNavigate();
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
        console.log(response.data);
        switch(response.data.role){
          case 1:
            navigate('/');
            break;
          case 2:
            navigate('/addevents');
            break;
          case 3:
            navigate('/eventpostuser');
            break;
          default:
            window.confirm("The account does not exist. Please sign up.");
        }
      }) 
      .catch(err => console.log(err));
  };

  function checkLoginKey (event){
    if(event.key == 'Enter' && state.item.email && state.item.password){
      axios
      .post("http://127.0.0.1:8000/api/login", state.item)
      .then(response =>{
        console.log(response.data);
        switch(response.data.role){
          case 1:
            navigate('/');
            break;
          case 2:
            navigate('/addevents');
            break;
          case 3:
            navigate('/eventpostuser');
            break;
          default:
            window.confirm("The account does not exist. Please sign up.");
        }
      }) 
      .catch(err => console.log(err));
    }
    
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
                onKeyPress={checkLoginKey}
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
                onKeyPress={checkLoginKey}
              />
            </div>
            <div className="line-hight-login marginsDivLogin centerLoginContent">
              <label className="fontLabelLogin line-hight-login white pointer">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#0" className="fontLabelLogin link-login dim white db underline" onClick={() => {navigate('/changepassword')}}>
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
            <a href="#0" className="fontLabelLogin link-login dim-login white db-login mrg-left-a-login underline" onClick={() => {navigate('/signin')}}>
              Sign up.
            </a>
          </div>
      </div>
    );
};

export default Login;
