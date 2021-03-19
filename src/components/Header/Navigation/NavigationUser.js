import { Component } from 'react';
import { style } from './Navigation.css';
import { Link } from 'react-router-dom';

class NavigationUser extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ul className="navigation">
                <Link to="/create" className="nav-link">Create-a-rate</Link>
                <Link to="/all-restaurants" className="nav-link">Restaurants</Link>
                <Link to="/profile" className="nav-link">Profile</Link>
                <Link to="/logout" className="nav-link">Logout</Link>
            </ul>
        )
    }
}

export default NavigationUser;