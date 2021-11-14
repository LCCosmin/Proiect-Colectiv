import React, { Fragment } from "react";
import styles from "./login.css";
import axios from 'axios'; 

class Login extends React.Component {
  constructor(props) {
    super(props);
     
    // add the props here
    this.state = {
     
      // the viewCompleted prop represents the status
      // of the task. Set it to false by default
      item: {
        email: "",
        password: ""
      },
       
      // this list stores all the completed tasks
      taskList: []
    };
  }

  // Add componentDidMount()
  componentDidMount() {
    this.refreshList();
  }
  
  refreshList = () => {
    axios   //Axios to send and receive HTTP requests
      .get("http://localhost:8000/api/tasks/")
      .then(res => this.setState({ taskList: res.data }))
      .catch(err => console.log(err));
  };

  weDoLoginFancy = event => {
    console.log('da')
    axios
      .post("http://localhost:8000/api/tasks/", this.state.item)
  };

  inputChangeEmail = event =>{
    this.setState({item: {email:event.target.value} })
  };

  inputChangePassword = event =>{
    this.setState({item: {password:event.target.value}})
  };

  render(){
    return (
      <div class="pa4 black-80 content">
        <form class="measure center" method="POST">
          <fieldset id="log_in" class="ba b--transparent center ph0 mh0">
            <legend class="f4 fw6 ph0 white center2">Log in</legend>
            <div class="mt3 center">
              <input
                class="pa2 fw4 f5 input-reset ba bg-transparent b--purple hover-white white-input w-100"
                type="email"
                name="email-address"
                id="email-address"
                placeholder="Email"
                onChange = {this.inputChangeEmail}
              />
            </div>
            <div class="mv3 center">
              <input
                class="pa2 fw4 f5 input-reset ba bg-transparent b--purple hover-white white-input w-100"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange = {this.inputChangePassword}
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
            <button
              class="ph3 pv2 fw4 ba b--purple bg-purple white grow pointer f5 dib mrg-left-8"
              onClick={this.weDoLoginFancy}
            />Log in
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
