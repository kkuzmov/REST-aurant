import { style } from './About.css';
import { Link,useHistory } from 'react-router-dom';
import {db} from '../../firebase/firebase.config';
import { getAllRestaurants } from '../../services/services';
import { AuthContext } from '../Auth/Auth';

import { useContext, useEffect, useState } from 'react';

function About(){
    let history = useHistory();
    const [ notificationMessage, setNotificationMessage ] = useState('');
    const { currentUser } = useContext(AuthContext);
    let [restaurantsCount, setRestaurantsCount] = useState(0);

    useEffect(()=>{
        getAllRestaurants()
        .then(res => setRestaurantsCount(res.docs.length))
    }, [])
    

    return(
        <section className="about-page">
        <h1 className="page-heading">About us</h1>
        <p></p>
        <h3>Currently we have {restaurantsCount} restaurant ratings in our database!</h3>
        <p><Link to="/login">Join us</Link> and create your own ratings and reviews!</p>
        </section>
    )
    
}

export default About;