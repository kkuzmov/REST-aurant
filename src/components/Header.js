import { Component } from 'react';
import logo from './clipart294515.png'
class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <header class="main-header">
            <img src={logo} alt="restaurant logo" class="logo-left"/>
            <nav>
                <ul class="navigation">
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                </ul>
            </nav>
        </header>
        )
    }
}

export default Header;