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
            <Container >

                {/* Main Component */}

            <div className="main-filter-container"> 
                <Row className="justify-content-between" style={{alignItems: "center"}}>
                    <Col md={2} className="col-drop-down">
                        <Dropdown>
                            <Dropdown.Toggle variant="" ></Dropdown.Toggle>
                        </Dropdown>
                    </Col>
                </Row>

            </div>



            </Container>
        </>
            );
    }