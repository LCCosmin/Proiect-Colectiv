import React, { Component } from 'react';
import axios from 'axios'; 
import './Ads.css';

class Ads extends React.Component {
  constructor() {
    super();
    this.state = {
        pathsImages: ["https://cdn-upmostly.pressidium.com/wp-content/uploads/setInterval-react.avif",
        "https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",
        "https://www.kudika.ro/images/image_thumbs/thumbs/c7d4e2340297ac3c24280d83f6da47ef/641x334-00-60.jpg?v=1506602456",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLxynIJvFN_LIGoUoK61TsE6nBV9HNSV-VA&usqp=CAU",
        "https://www.ilmubahasainggris.com/wp-content/uploads/2017/03/NGC.jpg.webp",
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/matching-replacing-mixing-colors/jcr_content/main-pars/before_and_after/image-after/match-outcome3.png"
         
    ]
  }
}
  
  changeData = () => { 
      console.log("here");
    document.getElementById("id1").src="https://cdn-upmostly.pressidium.com/wp-content/uploads/setInterval-react.avif";
    document.getElementById("id1").onClick = function () { window.open("https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks", "_blank")};
  }

  useEffect = () => {
    const interval = setInterval(() => {
        this.changeData();
    }, 1000);
    
  }

  render() {
    
    return (
      <div className="cv" height="10%" position="">
        <img
          className="ads"
          id= "ad1"
          src="https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
          alt="ccvcvcvc"
          width="20%"
          onClick={() =>
            window.open("https://github.com/Joeyryanbridges", "_blank")
          }
          
        />
        <img
          className="ads-wb"
          id= "ad2"
          src="https://www.kudika.ro/images/image_thumbs/thumbs/c7d4e2340297ac3c24280d83f6da47ef/641x334-00-60.jpg?v=1506602456"
          alt="ccvcvcvc"
          width="20%"
          onClick={() =>
            window.open("https://github.com/Joeyryanbridges", "_blank")
          }
        />
        <img
          className="ads"
          id= "ad3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLxynIJvFN_LIGoUoK61TsE6nBV9HNSV-VA&usqp=CAU"
          alt="ccvcvcvc"
          width="20%"
          onClick={() =>
            window.open("https://github.com/Joeyryanbridges", "_blank")
          }
        />
        <img
          className="ads-wb"
          id= "ad4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIX4fdymadei7FiL-19pxFAWPLEJgQlNEww&usqp=CAU"
          alt="ccvcvcvc"
          width="20%"
          onClick={() =>
            window.open("https://github.com/Joeyryanbridges", "_blank")
          }
        />
        <img
          className="ads"
          id= "ad5"
          src="https://www.ilmubahasainggris.com/wp-content/uploads/2017/03/NGC.jpg.webp"
          alt="ccvcvcvc"
          width="20%"
          onClick={() =>
            window.open("https://github.com/Joeyryanbridges", "_blank")
          }
        />
      </div>
    );
  }
}

export default Ads;