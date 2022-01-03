import React, { Component } from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import {
  IoLocationOutline,
  IoPricetags,
  IoCalendarOutline,
} from "react-icons/io5";
import { BsListTask } from "react-icons/bs";
import DatePicker from "sassy-datepicker";

export default class filters extends Component {
  render() {
    return (
      <div className="main-filter-container">
        <Row
          className="justify-content-between"
          style={{ alignItems: "center" }}
        >
          <Col md={2} className="col-drop-down">
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <span className="icon">
                  <IoLocationOutline />
                </span>
                Location
                <p className="lower-text">{this.props.state.currentLocationFilter}</p>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <ul className="checkbox-list">
                  {this.props.state.allData.map((v, i) => {
                    return (
                      <p className="each-checkbox" key={i}>
                        {v.loc}
                        <div className="check-box-div">
                          <input
                            className="check-box"
                            type="checkbox"
                            onChange={this.props.handleFilter}
                            name='location'
                            value={v.loc}
                          />
                        </div>
                      </p>
                    );
                  })}
                </ul>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col md={2} className="col-drop-down">
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <span className="icon">
                  <IoPricetags />
                </span>
                Price
                <p className="lower-text">{this.props.state.currentPriceFilter}</p>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <ul className="checkbox-list">
                  {this.props.state.allData.map((v, i) => {
                    return (
                      <p className="each-checkbox" key={i}>
                        {v.price}
                        <div className="check-box-div">
                          <input
                            className="check-box"
                            type="checkbox"
                            onChange={this.props.handleFilter}
                            name='price'
                            value={v.price}
                          />
                        </div>
                      </p>
                    );
                  })}
                </ul>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col md={2} className="col-drop-down">
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <span className="icon">
                  <IoCalendarOutline />
                </span>
                Date
                <p className="lower-text">{this.props.state.currentCalenderFilter}</p>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ padding: "0px", boxShadow: "none" }}>
                <DatePicker onChange={this.props.handleDate} />
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col md={2} className="col-drop-down">
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <span className="icon">
                  <BsListTask />
                </span>
                Type
                <p className="lower-text">{this.props.state.currentTypeFilter}</p>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <ul className="checkbox-list">
                  {this.props.state.allData.map((v, i) => {
                    return (
                      <p className="each-checkbox" key={i}>
                        {v.type}
                        <div className="check-box-div">
                          <input
                            className="check-box"
                            type="checkbox"
                            onChange={this.props.handleFilter}
                            name='type'
                            value={v.type}
                          />
                        </div>
                      </p>
                    );
                  })}
                </ul>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col md={2}>
            <button className="discover-btn">Discover Events</button>
          </Col>
        </Row>
      </div>
    );
  }
}
