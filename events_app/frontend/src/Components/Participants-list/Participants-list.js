import React from "react";
import "./Participants-list.css";
import axios from "axios";

class ParticipantsList extends React.Component {
  constructor() {
    super();
    this.state = {
      participants: []
    };
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
                    />
                  }
                </div>
                <div className="display-t-cell vert-allign-middle padding-lest-1rem">
                  <h1 className="font-size-24 font-weight-600 line-height-name white">
                    {participant.name}
                  </h1>
                  <h2 className="font-size-18 font-weight-400 mrg-top-0 mrg-bottom-0 white">
                    {participant.description}
                  </h2>
                </div>
                <div className=" display-t-cell vert-allign-middle btn-right">
                  <form className="width-list-part-90 text-al-right">
                    <button
                      id=""
                      className="font-size-24 button-reset dim-connect-button dim-button border-custom b-color-black dim pointer padding-tb white"
                      type="submit"
                    >
                      Connect
                    </button>
                  </form>
                </div>
              </div>
            </article>
            </div>  
          );
        })}
      </main>
    );
  }
}

export default ParticipantsList;