import React from 'react';
import Login from '../Login/login.js';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
  } from "react-router-dom";
  import { useNavigate } from "react-router-dom";

import './Home.css';
import App from '../../App.js';

const Home = () => {

    return (
        <div className="home-container">
            <div className="descriere">
                    <h1>
                        ALL <span className="color1">EVENTS</span><br /> IN THE CITY <br />IN <span className="color2">ONE</span> PLACE
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt volutpat mollis. Mauris vitae mauris quis velit scelerisque mattis. Nam aliquam nisl ut leo elementum, ac pretium nibh consequat. Duis a dapibus nibh. Proin in sollicitudin quam, at cursus nisi. Nulla sollicitudin metus dolor, bibendum eleifend ante facilisis vitae.</p>
                    <button className="new-account">Make an account now !
                        <Router>
                            <Routes>
                                <Route path="/login" element={<Login />}>
                                    
                                </Route>
                            </Routes>
                        </Router>
                    </button>
                  
                </div>
        </div>
  );
}


export default Home;