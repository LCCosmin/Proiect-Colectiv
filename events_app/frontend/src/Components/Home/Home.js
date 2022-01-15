import React from "react";
import "./Home.scoped.css";
import { useNavigate } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="descriere">
          <h1 className="h1-Home">
            ALL <span className="colorHome1">EVENTS</span>
            <br /> IN THE CITY <br />
            IN <span className="colorHome2">ONE</span> PLACE
          </h1>
          <p className="font-home-description">
            Life is a collection of special memories and surprizing experiences
            and Omnievents will only provide you with memorable ones!{" "}
          </p>

          <p className="font-home-description">
            All notable events from your city in only one app! Keep track of the
            latest updates and don't lose the opportunity to have the time of
            your life! Moreover, if you are keen on meeting new people that you
            share the same passions with, this app offers you the chance to
            interact with people interested in a specific event and even to
            attend it together if you wish to.{" "}
          </p>

          <p className="font-home-description">
            With Omnievents you won't lose the opportunity to make unforgettable
            memories!
          </p>
          <button
            onClick={() => {
              this.props.navigate("/signin");
            }}
            id="new-account-home"
          >
            Make an account now !
          </button>
        </div>
      </div>
    );
  }
}

function WithNavigate(props) {
  let navigate = useNavigate();
  return <Home {...props} navigate={navigate} />;
}

export default WithNavigate;
