import React, { Component } from "react";
import "./EventProfile.css";
import { AiOutlineUser } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import styles from "./EventProfile.css";

class EventProfile extends React.Component {
  render() {
    return (
      <body>
        <div className="EventProfile-container">
          <div className="img-container">
            <img
              src="https://media.timeout.com/images/103455335/image.jpg"
              alt="art gallery"
              width="100%"
              height="420"
            />
          </div>
          <div className="LeftSide leftPadding">
            <div className="EventTitle">Event Name</div>

            <div>
              <p className="UsersGoing">
                {" "}
                <AiOutlineUser />
                5225 users interested.
                <a href="">
                  {" "}
                  <u>View</u>
                </a>
                <br></br>{" "}
              </p>
            </div>

            <div className="Location">
              <p>
                {" "}
                <IoLocationOutline /> Location{" "}
              </p>
            </div>

            <div className="Price">
              <p>
                {" "}
                <IoPricetagOutline /> Price
              </p>
            </div>

            <div className="Date">
              <p>
                {" "}
                <MdDateRange /> Date
              </p>
            </div>

            <div className="Time">
              <p>
                {" "}
                <MdAccessTime /> Time
              </p>
            </div>
          </div>
          <div className="RightSide rightPadding">
            <div className="buttons ">
              <button type="button" className="anyButton brad marginEventProf">
                {" "}
                Going{" "}
              </button>
              <div className="divider" />
              <button type="button" className="anyButton brad marginEventProf">
                {" "}
                Maybe{" "}
              </button>
            </div>

            <div style={{ float: "left" }}>
              <p className="Description">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>

            <div style={{ float: "left" }}>
              <u>
                <a href="" className="Report">
                  Report event
                </a>
              </u>
              <br></br>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default EventProfile;
