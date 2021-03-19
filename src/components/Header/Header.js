import { Component } from 'react';
import logo from './clipart294515.png'
import { Link } from 'react-router-dom';
import { style } from './Header.css';
import NavigationUser from './Navigation/NavigationUser';
import NavigationGuest from './Navigation/NavigationGuest';
 
class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <header className="main-header">
                <Link to="/" className="nav-link"><a><img src={logo} alt="restaurant logo" className="logo-left"/></a></Link>
                <nav>
                   <NavigationUser />
                </nav>
            </header>
        )
    }
}

export default Header;