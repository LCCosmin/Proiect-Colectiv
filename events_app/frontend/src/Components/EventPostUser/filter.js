import React, { useEffect, useState } from "react";
import "./filter.css";
import Data from "./data.json";
import { Container, Row, Col, Dropdown, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	IoLocationOutline,
	IoPricetags,
	IoCalendarOutline,
	IoChevronDownOutline,
    IoStar
} from "react-icons/io5";
import { BsListTask } from "react-icons/bs";
import DatePicker from "sassy-datepicker";
import FilterData from "./data.json";

const locationData = [
	{ name: "Cluj-Napoca, CJ" },
	
];
const PriceData = [
	{ name: "Under 10€ (€)" },
	{ name: "10-50€ (€€)" },
	{ name: "Over 50€ (€€€)" },
];
const TypeData = [
	{ name: "Parties" },
	{ name: "Sport Events" },
	{ name: "Networking Events" },
	{ name: "Job Fairs" },
	{ name: "Conferences" },
	{ name: "Museum Expositions" },
	{ name: "Work Shops" },
];

class Filter extends React.Component {
	constructor(props) {
		super();
		this.state = {
			location: [],
			price: [],
			type: [],
			search: "",
			currentLocationFilter: "Search By City",
			currentPriceFilter: "$-$$$",
			currentCalenderFilter: "Search By Date",
			currentTypeFilter: "Select Type",
			dateVal: "",
			allData: [],
		};

		this.onChange = this.onChange.bind(this);
		this.handleLocation = this.handleLocation.bind(this);
		this.handlePrice = this.handlePrice.bind(this);
		this.handleType = this.handleType.bind(this);
	}

	componentDidMount() {
		this.setState({
			location: locationData,
			price: PriceData,
			type: TypeData,
			dateVal: "",
			allData: FilterData,
		});
	}

	onChange(date) {
		this.setState({
			search: `${date.getDate().toString()}/${[
				date.getMonth() + 1,
			].toString()}/${date.getFullYear().toString()}`,
		});
		console.log(this.state.search);
		console.log(date);
	}

	// Setting Location Checkbox

	handleLocation(e) {
		const { name, checked } = e.target;
		let newLocations = this.state.location.map((data) => {
			return data.name === name ? { ...data, isChecked: checked } : data;
		});
		this.setState({
			search: name,
			currentLocationFilter: name,
			location: newLocations,
		});
	}

	// Setting Price Checkbox

	handlePrice(e) {
		const { name, checked } = e.target;
		let newPrice = this.state.price.map((data) => {
			return data.name === name ? { ...data, isChecked: checked } : data;
		});
		this.setState({
			search: name,
			currentPriceFilter: name,
			price: newPrice,
		});
	}

	// Setting Type Checkbox

	handleType(e) {
		const { name, checked } = e.target;
		let newType = this.state.type.map((data) => {
			return data.name === name ? { ...data, isChecked: checked } : data;
		});
		this.setState({
			search: name,
			currentTypeFilter: name,
			type: newType,
		});
		console.log(this.state.search);
	}

	render() {
		return (
			<>
				<Container>
					{/* Main Component */}

                <div className="page-wrap"> 

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
										<p className="lower-text">
											{this.state.currentLocationFilter}
										</p>
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<ul className="checkbox-list">
											{this.state.location.map((v, i) => {
												return (
													<p className="each-checkbox" key={i}>
														{v.name}
														<div className="check-box-div">
															<input
																className="check-box"
																type="checkbox"
																onChange={this.handleLocation}
																name={v.name}
																checked={v ? v.isChecked : false}
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
										<p className="lower-text">
											{this.state.currentPriceFilter}
										</p>
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<ul className="checkbox-list">
											{this.state.price.map((v, i) => {
												return (
													<p className="each-checkbox" key={i}>
														{v.name}
														<div className="check-box-div">
															<input
																className="check-box"
																type="checkbox"
																name={v.name}
																onChange={this.handlePrice}
																checked={v ? v.isChecked : false}
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
										<p className="lower-text">
											{this.state.currentCalenderFilter}
										</p>
									</Dropdown.Toggle>

									<Dropdown.Menu style={{ padding: "0px", boxShadow: "none" }}>
										<DatePicker onChange={this.onChange} />
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
										<p className="lower-text">{this.state.currentTypeFilter}</p>
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<ul className="checkbox-list">
											{this.state.type.map((v, i) => {
												return (
													<p className="each-checkbox" key={i}>
														{v.name}
														<div className="check-box-div">
															<input
																className="check-box"
																type="checkbox"
																name={v.name}
																onChange={this.handleType}
																checked={v ? v.isChecked : false}
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

					<div className="bt-elems" > 
                        <span className="icon-star"><IoStar /></span>
                        <div className="my-title"> TOP EVENTS </div>
                        

					
								
						
					</div>
                </div>
				</Container>
			</>
		);
	}
}

export default Filter;
