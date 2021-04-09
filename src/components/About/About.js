import { style } from './About.css';
import { Link,useHistory } from 'react-router-dom';
import {db} from '../../firebase/firebase.config';
import { getAllRestaurants } from '../../services/services';
import { AuthContext } from '../Auth/Auth';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { useContext, useEffect, useState } from 'react';

function About(){
    let history = useHistory();
    const [ notificationMessage, setNotificationMessage ] = useState('');
    const { currentUser } = useContext(AuthContext);
    let [restaurantsCount, setRestaurantsCount] = useState(0);
    const [ errMessage, setErrMessage ] = useState('');

    useEffect(()=>{
        getAllRestaurants()
        .then(res => setRestaurantsCount(res.docs.length - 1))
        .catch(err => {
            setErrMessage(err.message)})
    }, [])
    

    return(
        <>
        <h1 className="page-heading">About us</h1>
        <section className="about-page">
        <p className="about-info">&copy; REST-aurant is a project, created for foodies by a foodie myself. &copy; REST-aurant uses REST principles to deliver up-to-date information and recomendations about all kinds of food places everywhere in the foodie world. Enjoy existing reviews and create your own. Expect future improvements and application expansions as users grow!</p>
        <h2>Currently we have more than {restaurantsCount} restaurant reviews in our database!</h2>
        <h2><Link to="/register" className="join-us">Join us</Link> and create your own ratings and reviews!</h2>
        <ErrorMessage>{errMessage}</ErrorMessage>

        </section>
        </>
    )
    
}

export default About;