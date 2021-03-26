import { Component } from 'react';
import { style } from './Navigation.css';
import { Link } from 'react-router-dom';

function NavigationUser(){
    return (
        <ul className="navigation">
            <Link to="/create" className="nav-link">Create-a-rate</Link>
            <Link to="/all-restaurants" className="nav-link">Restaurants</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
            <Link to="/logout" className="nav-link">Logout</Link>
        </ul>
    )
}

export default NavigationUser;