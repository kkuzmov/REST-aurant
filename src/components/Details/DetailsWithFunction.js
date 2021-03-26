import { style } from './Details.css';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import db from '../../firebase/firebase.config';
import { getOneRestaurant } from '../../services/services.js';

import map from './map.jpeg'
import { useEffect, useState } from 'react';

function DetailsWithFunction({match}){
    //set current restaurant
    let [restaurant, setRestaurant] = useState({});
    useEffect(()=>{
        getOneRestaurant(match.params.id)
        .then(res =>{
            let currentRestaurant = {...res.data()};
            setRestaurant(currentRestaurant)
        })
    }, [])

    // add like to likes

    function like(){
        let incrementedLikes = restaurant.ratedBy + 1;
        db.collection('restaurants')
            .doc(match.params.id)
            .update({ratedBy: incrementedLikes})
            .then(rest => {
                console.log(rest)
                setRestaurant(state => ({...state, ratedBy: incrementedLikes}))
            })
    }
    
    

    return(
        <>
            <h1 className="details-heading">{restaurant.name}</h1>
            <article className="restaurant-details-cointainer">
                <img src={restaurant.imageUrl} alt={restaurant.name} />
                <h1 className="restaurant-details-name">{restaurant.location}</h1>
                <h3 className="rated-by">Liked by {restaurant.ratedBy} people</h3>
                <h3 className="rated-by">Average rating: {restaurant.rating} *</h3>
                <p className="restaurant-details-description">{restaurant.description}</p>
                <p><img src={map} alt="map" className="google-api-sample-pic" /></p>
                <article className="details-buttons">
                    <button className="site-button">Save</button>
                    <button className="site-button" onClick={like}>Like</button>
                    <button className="site-button"onClick={restaurant.deleteRestaurant}>Delete</button>
                </article>
            </article>
        </>
    )
}

export default DetailsWithFunction;
