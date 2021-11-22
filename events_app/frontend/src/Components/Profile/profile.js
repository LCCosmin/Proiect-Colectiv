import React, { Component } from 'react'
import './profile.css'
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default class Profile extends Component {
    render() {
        return ( 
            <div>
                <div className="container-box">
                    <img src="http://placekitten.com/g/600/300" id="profile-back-photo" alt="Photo of a kitten looking menacing."/>
                    <div className="profile-image">
                        <img src="https://s3-alpha-sig.figma.com/img/6a03/487f/fe0efa3177b2f82f4cc3b32042ec4b4d?Expires=1638748800&Signature=T9R5TKUyu3Uq29NsCwIorLnaqLIQQ6G3aHQiaLQ62S3vY5ViXWTPCxnfKPL4eK3SOdAD6PfjzSEC-wCakELfSYVtIvC-7cfLjKxWMCoRnWuK6M~c~V6eOKzN6C~rmVl22jLPMNhrl0M~xonrDd4mte8VDY66r3dO1C2idedOscDPZKISEkbuywPcZJHEDww2F0Mc4GyGS0TxvZSx7QUQnWoItXARqEeB58Se2GKSwA3nCkhW7WE-dAOGByzjteO-ErGIUyxXFlThpYDwzo69qUSGwNConxDUoeF8uLH8snD9kIK-L-Asn~wyy2iOX9a-Xerxe65dvzBKCVE2FVOx7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                    </div>
                    <div className='profile-details'>
                        <p style={{"fontSize":"24px"}}>Nume Prenume</p>
                        <p style={{"fontSize":"13px"}}>User/Organizator</p>
                        <p style={{"fontSize":"18px"}}>Varsta</p>
                        <p style={{"fontSize":"24px","marginTop":"20px"}}>BIO</p>
                        <p className ='profile-description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                          Aenean commodo ligula eget dolor. Aenean massa. 
                          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                        <div className = "profile-icons">
                          <h3 className="icon"> <FaFacebookSquare/> </h3>
                          <h3 className="icon"> <BsInstagram/> </h3>
                          <button className="profile-button">Connect</button>
                        </div>
                          
                    </div>
                </div>
            </div>
        )
    }
}