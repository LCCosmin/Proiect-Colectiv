/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from "react";
import "./filter.css";
import { Container } from "react-bootstrap";
/* import EventCard from "./eventCard"; */ 
import FilterData from "./data.json";
import Filters from "./filters";
import { BsStarFill, BsFilter } from "react-icons/bs";
/* import Header from "../Components/FilterEvents/header.js"; 
import Header from "./header.js" */ 

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [],
      price: [],
      type: [],
      dateVal: "",
      search: "",
      currentLocationFilter: "Search By City",
      currentPriceFilter: "Search by Price($)",
      currentCalenderFilter: "search by Date",
      currentTypeFilter: "Select Type",
      allData: [],
      filterchanged: false,
      filteredData: [],
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleFilter = (e) => {
    const n = e.target.name;
    const c = e.target.checked;
    if (n === "location") {
      if (c) {
        return this.setState({
          ...this.state,
          location: [...this.state.location, e.target.value],
          filterchanged: true,
        });
      } else {
        let l = this.state.location;
        const i = l.indexOf(e.target.value);
        if (i > -1) {
          l.splice(i, 1);
        }
        return this.setState({
          ...this.state,
          location: l,
          filterchanged: true,
        });
      }
    }
    if (n === "price") {
      if (c) {
        return this.setState({
          ...this.state,
          price: [...this.state.price, e.target.value],
          filterchanged: true,
        });
      } else {
        let l = this.state.price;
        const i = l.indexOf(e.target.value);
        if (i > -1) {
          l.splice(i, 1);
        }
        return this.setState({ ...this.state, price: l, filterchanged: true });
      }
    }
    if (n === "type") {
      if (c) {
        return this.setState({
          ...this.state,
          type: [...this.state.type, e.target.value],
          filterchanged: true,
        });
      } else {
        let l = this.state.type;
        const i = l.indexOf(e.target.value);
        if (i > -1) {
          l.splice(i, 1);
        }
        return this.setState({ ...this.state, type: l, filterchanged: true });
      }
    }
  };

  handleDate = (e) => {
    function getdate(dateIn) {
      var yyyy = dateIn.getFullYear();
      var mm = dateIn.getMonth() + 1;
      var dd = dateIn.getDate();
      return String(dd + "/" + mm + "/" + yyyy);
    }
    var d = getdate(e);
    this.setState({ ...this.state, dateVal: d, filterchanged: true });
  };

  componentDidUpdate() {
    if (this.state.filterchanged) {
      const f = this.state.allData.filter((i) =>
        this.state.location?.includes(i.loc) ||
        this.state.price?.includes(i.price.toString()) ||
        this.state.type == i.type ||
        this.state.dateVal == i.date ||
        this.state.search.trim() !== ""
          ? i.title
              .trim()
              .toLowerCase()
              .indexOf(this.state.search.trim().toLowerCase()) > -1
          : ""
      );

      if (
        f.length < 1 &&
        this.state.dateVal === "" &&
        this.state.search === ""
      ) {
        return this.setState({
          ...this.state,
          filterchanged: false,
          filteredData: this.state.allData,
        });
      }
      this.setState({ ...this.state, filterchanged: false, filteredData: f });
    }
  }

  handleclear = () => {
    this.setState({
      ...this.state,
      location: [],
      price: [],
      type: [],
      dateVal: "",
      search: "",
      filterchanged: true,
    });
  };

  handlesearch = (e) => {
    this.setState({
      ...this.state,
      search: e.target.value,
      filterchanged: true,
    });
  };

  componentDidMount() {
    this.setState({
      allData: FilterData,
      filteredData: FilterData,
    });
  }

  render() {
    return (
      <Container>
        
        <Filters
          handleDate={this.handleDate}
          handleFilter={this.handleFilter}
          state={this.state}
        />
        <div className="row p-2 mt-5 filter-top d-flex align-center justify-content-between">
          <h3 className="d-flex align-center maxwidth">
            <BsStarFill className="icon" />
            TOP EVENTS
          </h3>
          <button
            onClick={this.handleclear}
            className="d-flex align-center btn cbtn"
          >
            <BsFilter className="icon mx-1" />
            Clear filter
          </button>
        </div>
        <div className="cardsWrapper">
          <div
            className="eventcard"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/events1.jpeg)",
            }}
          >
            <div className="content">
              <h3>contempART</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium temporibus
              </p>
            </div>
          </div>
          <div
            className="eventcard"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/events2.jpeg)",
            }}
          >
            <div className="content">
              <h3>new concept party</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium temporibus numquam
              </p>
            </div>
          </div>
          {/* {this.state.filteredData.map((data, index) => {
            return <EventCard key={index} data={data} />;
          })}
          {this.state.filteredData.length === 0 && (
            <div className="noEvents">Events not found</div>
          )} */}
        </div>
      </Container>
    );
  }
}

export default Filter;
