import logo from './clipart294515.png'
import { Link } from 'react-router-dom';
import { style } from './Header.css';
import { useContext } from 'react';
import { AuthContext } from '../Auth/Auth';

import NavigationUser from './Navigation/NavigationUser';
import NavigationGuest from './Navigation/NavigationGuest';
 
function Header(){
    const { currentUser } = useContext(AuthContext);

    if(currentUser){
        console.log('user is already logged in!')
        return (
            <header className="main-header">
                <Link to="/" className="nav-link"><i class="fas fa-hamburger"></i></Link>
                <nav>
                   <NavigationUser />
                </nav>
            </header>
        )
    }

        return (
            <header className="main-header">
                <Link to="/" className="nav-link"><img src={logo} alt="restaurant logo" className="logo-left"/></Link>
                <nav>
                   <NavigationGuest />
                </nav>
            </header>
        )
}


export default Header;