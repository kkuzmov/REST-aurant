import { Component } from 'react';
import { Link } from 'react-router-dom';

import { style } from './Navigation.css';


class NavigationGuest extends Component{
    render(){
        return (
            <ul className="navigation">
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/register" className="nav-link">Register</Link>
                <Link to="/about" className="nav-link">About</Link>
            </ul>
        )
    }
}

export default NavigationGuest;