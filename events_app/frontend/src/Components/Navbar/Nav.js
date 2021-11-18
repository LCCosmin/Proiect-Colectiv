import React from 'react';

import './Nav.css';

const Nav = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn){
        return(
            <div className="topnav" id="myTopnav">
                <a>
                <img src="https://s3-alpha-sig.figma.com/img/3818/7147/0675ce0c65c4aa71d9eed35d0f9c8041?Expires=1637539200&Signature=JAu5mtO0ijfOF6bhg4eJm7FWViHzG7hpxCRBWZMBZLItTHjXtV--eMPm-WmFsyWnzmOviGNjvvf6XBhUtLjNtGqATKjW5Bd3CBp9INsvIecURffeRPWUKnXbbqmYI4Q38EQ8OunLb1-LtNj8vK8BjtyJ7ugtj83DZUBE13t6bD1hU91CffNQaUxUvo-viuEq56prOBsq6S7bbdsOrrVh6qaBmbGE1oLPxkJPmMLLT4Vm8ZSGFNO7NbZcfdmGoMMQMss9hoD2U-h7D-zEmBCppiiBYGAXJ1TVwqf0WJITiTU310RG7G8CjN-iLt1lfw1NX88QQ06siNcmM-0YDVbYHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" 
                width="135px" height="100%" className="logo" alt="Site Name"/>
                </a>
                <a >
                    <div className="searchContainer">
                        <i className="fa fa-search searchIcon"></i>
                        <input className="searchBox" type="search" name="search" placeholder="Search..."/>
                    </div>
                </a>
                <div className="margin">
                    <a href="#mylist">My list</a>
                    <a href="#signot">Signout</a>
                
                    <div className="notification-list-user-img">
                            <img src="https://img.icons8.com/color/100/000000/name.png" alt="" className="user-avatar-md rounded-circle"/>
                    </div>
                </div>  
            </div>
        );
    }
    else{
        return(
            <div className="topnav" id="myTopnav">
                <a>
                    <img src="https://s3-alpha-sig.figma.com/img/3818/7147/0675ce0c65c4aa71d9eed35d0f9c8041?Expires=1637539200&Signature=JAu5mtO0ijfOF6bhg4eJm7FWViHzG7hpxCRBWZMBZLItTHjXtV--eMPm-WmFsyWnzmOviGNjvvf6XBhUtLjNtGqATKjW5Bd3CBp9INsvIecURffeRPWUKnXbbqmYI4Q38EQ8OunLb1-LtNj8vK8BjtyJ7ugtj83DZUBE13t6bD1hU91CffNQaUxUvo-viuEq56prOBsq6S7bbdsOrrVh6qaBmbGE1oLPxkJPmMLLT4Vm8ZSGFNO7NbZcfdmGoMMQMss9hoD2U-h7D-zEmBCppiiBYGAXJ1TVwqf0WJITiTU310RG7G8CjN-iLt1lfw1NX88QQ06siNcmM-0YDVbYHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" 
                width="135px" height="100%" className="logo" alt="Site Name"/>
                </a>
            </div>
        );
    }
}
export default Nav;