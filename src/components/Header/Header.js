import logo from './clipart294515.png'
import { Link } from 'react-router-dom';
import { style } from './Header.css';
import NavigationUser from './Navigation/NavigationUser';
import NavigationGuest from './Navigation/NavigationGuest';
 
function Header(){
        return (
            <header className="main-header">
                <Link to="/" className="nav-link"><img src={logo} alt="restaurant logo" className="logo-left"/></Link>
                <nav>
                   <NavigationUser />
                </nav>
            </header>
        )
}


export default Header;