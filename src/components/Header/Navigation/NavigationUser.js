import { style } from './Navigation.css';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../../services/services';
import { useContext } from 'react';

import { AuthContext } from '../../Auth/Auth';


function NavigationUser(){
    function logout(){
        logoutUser()
            .then(res => console.log('user is logged out!'))
    }
    const { currentUser } = useContext(AuthContext);
    let email = currentUser.email;   

    return (
        <>
        <ul className="navigation">
            <Link to="/create" className="nav-link">Create-a-rate</Link>
            <Link to="/all-restaurants" className="nav-link">Restaurants</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
            <Link to="" className="nav-link" onClick={logout}>Logout</Link>
        </ul>
        <h3>Welcome, {email}!</h3>
        </>
    )
}

export default NavigationUser;