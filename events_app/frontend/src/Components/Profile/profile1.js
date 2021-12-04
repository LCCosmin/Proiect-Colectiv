import React, { Component } from 'react'
import './profile1.css'
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";


export default class Profile extends Component {
    render() {
            return ( 
                
                <article class="dark-gray mv4 w-50-m w-25-l">
                <img src="http://placekitten.com/g/600/300" id="w-100" alt="Photo of a kitten looking menacing."/>
                <div id="circle"></div>
                    <div id="details">
                      <h1 id = "details">Nume Prenume</h1>
                      <h3 id = "details">User/Organizator</h3>
                      <h1 id = "details">Varsta</h1>
                      <h1 id = "details">BIO</h1>
                      <p className ='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                          Aenean commodo ligula eget dolor. Aenean massa. 
                          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                          <div className = "icons">
                          <h3 className="fandi"> <FaFacebookSquare/> </h3>
                          <h3 className="fandi"> <BsInstagram/> </h3>
                          <button className="buttonConnect">Connect</button>
                          </div>
                    </div>
              </article>
        )
    }
}