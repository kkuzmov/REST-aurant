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
                <section className="logo-in-header">
                <Link to="/" className="nav-link"><i class="fas fa-hamburger"></i></Link>
                <h1>REST-aurant</h1>
                </section>
                <nav>
                   <NavigationUser />
                </nav>
            </header>
        )
    }

        return (
            <header className="main-header">
                <section className="logo-in-header">
                <Link to="/" className="nav-link"><i class="fas fa-hamburger"></i></Link>
                <h1>REST-aurant</h1>
                </section>
                <nav>
                   <NavigationGuest />
                </nav>
            </header>
        )
}


export default Header;