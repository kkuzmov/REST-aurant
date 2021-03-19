import { Component } from 'react';
import { style } from './Navigation.css';

class NavigationUser extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ul className="navigation">
                <li><a href="/create">Create-a-rate</a></li>
                <li><a href="/all-restaurants">Restaurants</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        )
    }
}

export default NavigationUser;