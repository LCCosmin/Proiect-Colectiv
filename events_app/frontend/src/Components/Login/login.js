import React from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      item: {
        email: "",
        password: "",
      },

      valid: "",
    };
  }

  checkLogin = () => {
    axios
      .post("http://127.0.0.1:8000/api/login", this.state.item)
      .then((response) => {
        switch (response.data.role) {
          case 1:
            this.props.navigate("/");
            break;
          case 2:
            if(!response.data.user_info){
              this.props.navigate("/organiserdata/" + response.data.id);
            }else{
              this.props.navigate("/addevents");
            }
            break;
          case 3:
            if(!response.data.user_info){
              this.props.navigate("/personaldata/"+ response.data.id);
            }else{
              this.props.navigate("/eventpostuser/"+ response.data.id);
            }
            break;
          default:
            this.showErrorMessage();
        }
      })
      .catch((err) => console.log(err));
  };

  checkLoginKey = (event) => {
    if (
      event.key == "Enter" &&
      this.state.item.email &&
      this.state.item.password
    ) {
      axios
        .post("http://127.0.0.1:8000/api/login", this.state.item)
        .then((response) => {
          switch (response.data.role) {
            case 1:
              this.props.navigate("/");
              break;
            case 2:
              if(!response.data.user_info){
                this.props.navigate("/organiserdata/" + response.data.id);
              }else{
                this.props.navigate("/addevents");
              }
              break;
            case 3:
              if(!response.data.user_info){
                this.props.navigate("/personaldata/"+ response.data.id);
              }else{
                this.props.navigate("/eventpostuser/"+ response.data.id);
              }
              break;
            default:
              this.showErrorMessage();
          }
        })
        .catch((err) => console.log(err));
    }
  };

  inputChangeEmail = (event) => {
    this.state.item.email = event.target.value;
  };

  inputChangePassword = (event) => {
    this.state.item.password = event.target.value;
  };

  closeErrorMessage = () => {
    var close = document.getElementsByClassName("closebtnalert");
    var i;

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = document.getElementById("alertlogin");
        div.style.opacity = "0";
        setTimeout(function() {
          div.style.display = "none";
        }, 600);
      };
    }
  };

  showErrorMessage = () => {
    var alert = document.getElementById("alertlogin");
    alert.style.display = "block";
  };
  render() {
    return (
      <div>
        <div className="paddingLoginPage contentLogin">
          <fieldset
            id="log_in"
            className="borderLogin centerLoginContent paddingFieldsetContent"
          >
            <legend className="fontTitle paddingFieldsetContent centerLoginTitle">
              Log in
            </legend>
            <div className="marginsDivLogin centerLoginContent">
              <input
                className="paddingInputLogin fontInputLogin input-reset borderLogin backgroundInputLogin borderInputLogin hover-white-login white-input-login width-100-login"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={this.inputChangeEmail}
                onKeyPress={this.checkLoginKey}
              />
            </div>
            <div className="marginsDivLogin centerLoginContent">
              <input
                className="paddingInputLogin fontInputLogin input-reset borderLogin backgroundInputLogin borderInputLogin hover-white-login white-input-login width-100-login"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={this.inputChangePassword}
                onKeyPress={this.checkLoginKey}
              />
            </div>
            <div className="line-hight-login marginsDivLogin centerLoginContent">
              <button
                className="dimensions-button-login fontLabelLogin borderLogin button-login grow-login pointer display-login mrg-left-buton-login"
                onClick={this.checkLogin}
              >
                {" "}
                Log in
              </button>
            </div>
            <div className="line-hight-login marginsDivLogin centerLoginContent">
              <div 
                href="#0"
                className="fontLabelLogin line-hight-login white mrg-left-q2-login">
                Don't have an account?
                <a
                  href="#0"
                  className="fontLabelLogin link-login dim-login white db-login mrg-left-a-login underline"
                  onClick={() => {
                    this.props.navigate("/signin");
                  }}
                >
                  Sign up.
                </a>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="alert" id="alertlogin">
          <span className="closebtnalert" onClick={this.closeErrorMessage}>
            &times;
          </span>
          <strong>Error!</strong> The account does not exist. Please check if
          the email and password are correct.
        </div>
      </div>
    );
  }
}

function WithNavigate(props) {
  let navigate = useNavigate();
  return <Login {...props} navigate={navigate} />;
}
export default WithNavigate;
