import { Component } from 'react';
import { style } from './Navigation.css';


class NavigationGuest extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ul class="navigation">
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
            </ul>
        )
    }
}

export default NavigationGuest;