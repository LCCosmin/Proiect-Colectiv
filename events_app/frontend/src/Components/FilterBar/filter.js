import React, { useEffect, useState } from 'react';
import './filter.css'
import Data from './data.json'
import { Container, Row, Col, Dropdown, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoLocationOutline, IoPricetags, IoCalendarOutline, IoChevronDownOutline, IoStar } from 'react-icons/io5';
import { BsListTask } from 'react-icons/bs';
import DatePicker from 'sassy-datepicker';
import FilterData from './data.json'
import museumImage from './assets/museum.jpg';
import partyImage from './assets/party.jpg'; 
import sportImage from './assets/sport.jpg'; 

const Filter = (props) => {

    // checkbox data

    const locationData = [
        { name: "Cluj-Napoca, CJ" },
       
    ]
    const PriceData = [
        { name: "Under 10€ (€)" },
        { name: "10-50€ (€€)" },
        { name: "Over 50€ (€€€)" },
    ]
    const TypeData = [
        { name: "Parties" },
        { name: "Sport Events" },
        { name: "Networking Events" },
        { name: "Job Fairs" },
        { name: "Conferences" },
        { name: "Museum Expositions" },
        { name: "Workshops" },
    ]
    
    // setting constants
    
    const [search, setSearch] = useState("")
    const [currentLocationFilter, setCurrentLocationFilter] = useState("Search by City")
    const [currentPriceFilter, setCurrentPriceFilter] = useState("$-$$$")
    const [currentCalendarFilter, setCurrentCalendarFilter] = useState("Search by Date")
    const [currentTypeFilter, setCurrentTypeFilter] = useState("Select Type")
    const [location, setLocation] = useState([])
    const [price, setPrice] = useState([])
    const [type, setType] = useState([])
    const [dateVal, setDate] = useState("")
    const [allData,setAllData]=useState([])


    useEffect(() => {
        setLocation(locationData)
        setPrice(PriceData)
        setType(TypeData)
        setDate(dateVal)
        setAllData(FilterData)
    }, []) // ,[] to run only on the first render 

    // Setting Data

    const onChange = (date) => {
        setSearch(`${date.getDate().toString()}/${[date.getMonth() + 1].toString()}/${date.getFullYear().toString()}`)
        console.log(search)
        console.log(date)
    };

    // Setting Location Checkbox

    const handleLocation = (e) => {
        const { name, checked } = e.target;
        let newLocations = location.map((data) => {
            return (data.name === name ? { ...data, isChecked: checked } : data)
        })
        setSearch(name)
        setCurrentLocationFilter(name)
        setLocation(newLocations)
    }

    // Setting Price Checkbox

    const handlePrice = (e) => {
        const { name, checked } = e.target;
        let newPrice = price.map((data) => {
            return (data.name === name ? { ...data, isChecked: checked } : data)
        })
        setSearch(name)
        setCurrentPriceFilter(name)
        setPrice(newPrice)
    }

    // Setting Type Checkbox

    const handleType = (e) => {
        const { name, checked } = e.target;
        let newType = type.map((data) => {
            return (data.name === name ? { ...data, isChecked: checked } : data)
        })
        setSearch(name)
        setCurrentTypeFilter(name)
        setType(newType)
        console.log(search)
    }


    return (
        <>
        <div className="all-background"> 
            <Container >

                {/* Main Component */}
            <div className="all" > 
                <div className="main-filter-container" >
                    <Row className="justify-content-between" style={{ alignItems: "center" }}>

                        <Col md={2} className="col-drop-down">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    <span className="icon"><IoLocationOutline /></span>
                                    Location
                                    <p className="lower-text">{currentLocationFilter}</p>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <ul className="checkbox-list">
                                        {location.map((v, i) => {
                                            return (
                                                <p className="each-checkbox" key={i}>{v.name}
                                                    <div className="check-box-div">
                                                        <input className="check-box" type="checkbox" onChange={handleLocation} name={v.name} checked={v ? v.isChecked : false} />
                                                    </div>
                                                </p>

                                            )
                                        })}

                                    </ul>

                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>

                        <Col md={2} className="col-drop-down">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" >
                                    <span className="icon"><IoPricetags /></span>
                                    Price
                                    <p className="lower-text">{currentPriceFilter}</p>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <ul className="checkbox-list">
                                        {price.map((v, i) => {
                                            return (
                                                <p className="each-checkbox" key={i}>{v.name}
                                                    <div className="check-box-div">
                                                        <input className="check-box" type="checkbox" name={v.name} onChange={handlePrice} checked={v ? v.isChecked : false} />
                                                    </div>
                                                </p>

                                            )
                                        })}

                                    </ul>

                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>

                        <Col md={2} className="col-drop-down">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    <span className="icon"><IoCalendarOutline /></span>
                                    Date
                                    <p className="lower-text">{currentCalendarFilter}</p>
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{ padding: "0px", boxShadow: "none"}}>
                                    <DatePicker onChange={onChange} />

                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>

                        <Col md={2} className="col-drop-down">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    <span className="icon"><BsListTask /></span>
                                    Type
                                    <p className="lower-text">{currentTypeFilter}</p>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <ul className="checkbox-list">
                                        {type.map((v, i) => {
                                            return (
                                                <p className="each-checkbox" key={i}>{v.name}
                                                    <div className="check-box-div">
                                                        <input className="check-box" type="checkbox" name={v.name} onChange={handleType} checked={v ? v.isChecked : false} />
                                                    </div>
                                                </p>

                                            )
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

                            {/* Cards */}


                <span className="icon-star"><IoStar /></span>
                <div className="top-events"> TOP EVENTS </div>

                <div>
                    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }} className="mt-5">
                     
                     {/* Filtering Data */}
                       
                        {allData.filter((val) => {
                            if (search === "") {
                                return val
                            }
                            else if (val.loc.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                                return val

                            }
                            else if (val.Type.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                                return val

                            }
                            else if (val.date.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                                return val

                            }
                            else if (search === "Under 10€ (€)" ? val.Price < 10 : search === "10-50€ (€€)" ? val.Price <= 50 && val.Price >= 10 : val.Price > 50) {
                                return val

                            }
                        }).map((data, index) => {
                            return (  
                                <>
                                <div className="cards"> 
                                  <Card key={index} className="mt-2 mb-2" style={{ width: '78rem', backgroundColor: "black", color: "white", fontWeight: "700"}}>
                                    <img src ={data.img} alt={data.title} width="100%" height="450"  />
                                        <Card.Body>
                                        
                                        <Card.ImgOverlay>
                                      
    
                                            

                                            <Card.Title className="my-title" style={{fontWeight: "700", fontSize: "60px", marginTop: "200px", marginLeft:"50px" }
                                        
                                    }>{data.Title}</Card.Title>

                                                <Card.Text className="text-below"> 
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. <span style={{ color: "white", fontWeight: "700", float: "right", marginLeft: "50px" }}></span></p>
                                                </Card.Text>
                                            </Card.ImgOverlay>
                                        </Card.Body>
                                       
                                    </Card>

                                   
                                </div>
                                </>
                           )
                        })
                        }
                    </div>
                </div>
            </div>
            </Container>
        </div>


        </>
    );
}

export default Filter;