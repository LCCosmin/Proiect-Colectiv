import React, { Component } from 'react';
import axios from 'axios'; 
import './Ads.css';

class Ads extends React.Component {
  constructor() {
    super();
    this.state = {
      adds:[
        {"img_name": "emag.png", "path": "https://www.emag.ro/"},
        {"img_name":"kfc.jpg", "path":"https://www.kfc.ro/"},
        {"img_name":"marcopolo.png", "path": "https://www.marc-o-polo.com/en-ro"},
        {"img_name":"officeshoes.jpg", "path": "https://www.officeshoes.ro/"},
        {"img_name":"footshop.png", "path":"https://www.footshop.ro/ro/"},
        {"img_name":"spartan.jpg", "path": "https://spartan.ro/"},
        {"img_name":"sneakerindustry.png", "path": "https://sneakerindustry.ro/ro/"},
        {"img_name":"ubb.gif", "path": "http://www.cs.ubbcluj.ro/"},
        {"img_name":"xpertbeauty.jpg", "path": "https://www.xpertbeauty.ro/"},
        {"img_name":"hm.jpg", "path": "https://www2.hm.com/ro_ro/index.html"},
        {"img_name":"storia.png", "path": "https://www.storia.ro/"},
        {"img_name":"f64.jpg", "path": "https://www.f64.ro/"},
        {"img_name":"bershka.jpg", "path": "https://www.bershka.com/ro/"},
        {"img_name":"thebodyshop.jpg", "path": "https://thebodyshop.ro/"},
        {"img_name":"vagabond.png", "path": "https://vagabondstudio.com/"},
        {"img_name":"gucci.png", "path": "https://www.gucci.com/ro/en_gb/"},
        {"img_name":"capodopera.jpg", "path": "https://capodopera12.ro/"},
        {"img_name":"benvenuti.jpg", "path": "https://www.benvenuti.ro/"},
        {"img_name":"stradivarius.jpg", "path": "https://www.stradivarius.com/ro/"},
      ],
  }
}
  getRandomAdds(){
    let rand;
    console.log(rand);
    var addsArray = [];
    while(addsArray.length != 8){
      rand = Math.floor(Math.random() * 19);
      if(!addsArray.includes(this.state.adds[rand]))
        addsArray.push(this.state.adds[rand]);
    }
    return addsArray;
  }
  changeData = () => { 
    document.getElementById("id1").src="https://cdn-upmostly.pressidium.com/wp-content/uploads/setInterval-react.avif";
    document.getElementById("id1").onClick = function () { window.open("https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks", "_blank")};
  }

  useEffect = () => {
    const interval = setInterval(() => {
        this.changeData();
    }, 1000);
    
  }
  render() {
    var randomAdds = this.getRandomAdds();
    console.log(randomAdds)
    console.log(this.state.adds);
    return (
      <div className="cv" height="10%" position="">
        {
        randomAdds.map((add)=>{
          return(
            <img
              className="ads"
              id= "ad1"
              src={"/images/" + add.img_name}
              alt="ccvcvcvc"
              width="12.3%"
              height="170px"
              onClick={() =>
                window.open(add.path, "_blank")
              }
            />
          )
      })
    }
      </div>
    );
  }
}

export default Ads;