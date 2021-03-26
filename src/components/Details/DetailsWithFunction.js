import { style } from './Details.css';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import db from '../../firebase/firebase.config';
import { getOneRestaurant } from '../../services/services.js';

import map from './map.jpeg'
import { useEffect, useState } from 'react';

function DetailsWithFunction({match}){

    let [restaurant, setRestaurant] = useState({});
    useEffect(()=>{
        getOneRestaurant(match.params.id)
        .then(res =>{
            let currentRestaurant = {...res.data()};
            console.log(currentRestaurant);
            setRestaurant(currentRestaurant)
        })
    }, [])
    
    

    return(
        <>
        <h1>{restaurant.name}</h1>
        <h1>{restaurant.description}</h1>
        <h1>{restaurant.imageUrl}</h1>
        <h1>{restaurant.location}</h1>
        </>
    )
}

export default DetailsWithFunction;
