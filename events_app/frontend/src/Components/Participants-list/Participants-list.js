import React from "react";
import "./Participants-list.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Ads from "../Ads/Ads";

class ParticipantsList extends React.Component {
  constructor() {
    super();
    this.state = {
      participants: [],
    };
    this.id = 0;
  }
  componentDidMount(){
    this.id = window.location.href.split('/').at(-1);
    axios
    .post("http://127.0.0.1:8000/api/getparticipantslist", {id: this.id})
    .then(response =>{
        this.setState({participants: response.data.participants});
        console.log(response.data);
    }) 
    .catch(err => console.log(err));
  }
  render() {
    const { participants } = this.state;
    return (
      <main className="main-width-100 main-center white">
        <div className="event-image-participants">
          <img
            src="https://media.timeout.com/images/103455335/image.jpg"
            alt="participants list picture"
          />
        </div>
        {
          participants.map((participant) => {
          return (

            <div className="margin-top-div">
                          <article
              key={participant.id}
              className="display-t width-list-part-90 auto-height padding-20 padding-b comp-list"
              href="#0"
            >
              <div className=" display-grid-custom">
                <div className="display-t-cell width-2rem vert-allign-middle">
                  {
                    // here it should be added the photo path
                    <img
                      src={"/images/" + participant.img_name}
                      alt="user image"
                      className="border-custom display-block border-radius-100 img-user-custom"
                      onClick={() => this.props.navigate("/profile/" + participant.id)}
                    />
                  }
                </div>
                <div className="display-t-cell vert-allign-middle padding-lest-1rem">
                  <h1 className="font-size-24 font-weight-600 line-height-name white">
                    {participant.first_name + ' ' + participant.last_name}
                  </h1>
                  <h2 className="font-size-18 font-weight-400 mrg-top-0 mrg-bottom-0 white">
                    {participant.about}
                  </h2>
                </div>
                <div className=" display-t-cell vert-allign-middle btn-right">
                  <form className="width-list-part-90 text-al-right">
                    <button
                      id=""
                      className="grow-connect font-size-24 button-reset dim-connect-button dim-button border-custom b-color-black dim pointer padding-tb white"
                      type="submit"
                    >
                      Connect
                    </button>
                  </form>
                </div>
              </div>
            </article>
            </div>  
          )
        })}
        <Ads></Ads>
      </main>
    );
  }
}

function WithNavigate(props) {
  let navigate = useNavigate();
  return <ParticipantsList {...props} navigate={navigate} />;
}
export default WithNavigate;
