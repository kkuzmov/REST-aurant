import { Component } from 'react';
import { style } from './Navigation.css';

class NavigationUser extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ul class="navigation">
                <li><a href="#">Create-a-rate</a></li>
                <li><a href="#">Restaurants</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        )
    }
}

export default NavigationUser;