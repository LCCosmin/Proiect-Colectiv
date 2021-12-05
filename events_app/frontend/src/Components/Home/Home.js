import React from 'react';

import './Home.css';

const Home = ({onRouteChange}) => {
  return ( 
      <div className="home-container">
          <div className="descriere">
                <h1>
                    ALL <span className="colorHome1">EVENTS</span><br /> IN THE CITY <br />IN <span className="colorHome2">ONE</span> PLACE
                </h1>
                <p className="font-home-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt volutpat mollis. Mauris vitae mauris quis velit scelerisque mattis. Nam aliquam nisl ut leo elementum, ac pretium nibh consequat. Duis a dapibus nibh. Proin in sollicitudin quam, at cursus nisi. Nulla sollicitudin metus dolor, bibendum eleifend ante facilisis vitae.</p>
                <button onClick={() => onRouteChange('login')} className="new-account-home">Make an account now !</button>
            </div>
      </div>
  );
}

export default Home;