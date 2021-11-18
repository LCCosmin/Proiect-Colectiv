import React, { Component } from 'react'
import './profile.css'

export default class Profile extends Component {
    render() {
        return ( 
            <div className='desktop6'>
                <div> 
                </div> 
                <div className='bio'>
                <img alt="" className='profilephoto'/>
                <img src="C:\Users\razva\Proiect-Colectiv\events_app\frontend\img" alt="" />
                <p className='Line5'></p>
                <p className='Line4'></p>
                <p className='age'>Varsta</p>
                <div className='descriere'>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                </div>
                </div>
            </div>
        )
    }
}