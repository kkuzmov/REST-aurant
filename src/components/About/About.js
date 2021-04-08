import { style } from './About.css';
import { Link,useHistory } from 'react-router-dom';
import {db} from '../../firebase/firebase.config';
import { getOneRestaurant } from '../../services/services.js';
import Notification from '../Notifications/Notifications';
import { AuthContext } from '../Auth/Auth';

import { useContext, useEffect, useState } from 'react';

function About(){
    let history = useHistory();
    const [ notificationMessage, setNotificationMessage ] = useState('');
    const { currentUser } = useContext(AuthContext);
    
    return(
        <h1 className="page-heading">About us</h1>
    )
    
}

export default About;