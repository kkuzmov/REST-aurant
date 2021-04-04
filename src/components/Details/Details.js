import { style } from './Details.css';
import { Route, Link, NavLink, Switch, Redirect, useHistory } from 'react-router-dom';
import {db, firebaseApp} from '../../firebase/firebase.config';
import { getOneRestaurant } from '../../services/services.js';
import { AuthContext } from '../Auth/Auth';

import map from './map.jpeg'
import { useContext, useEffect, useState } from 'react';

function DetailsWithFunction({match}){
    let history = useHistory();
    const { currentUser } = useContext(AuthContext);


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

    function likeRestaurant(){
        let incrementedLikes = restaurant.ratedBy + 1;
        db.collection('restaurants')
            .doc(match.params.id)
            .update({ratedBy: incrementedLikes})
            .then(rest => {
                setRestaurant(state => ({...state, ratedBy: incrementedLikes}))
            })
    }
    function deleteRestaurant(){
        db.collection('restaurants')
            .doc(match.params.id)
            .delete()
            .then(
                setTimeout(()=> history.push('/'), 1500)
            )
    }
    

    return(
        <>
            <h1 className="details-heading">{restaurant.name}</h1>
            <article className="restaurant-details-cointainer">
                <img src={restaurant.imageUrl} alt={restaurant.name} />
                <h1 className="restaurant-details-name">{restaurant.location}</h1>
                <h3 className="rated-by">Liked by {restaurant.ratedBy} people</h3>
                <p className="restaurant-details-description">{restaurant.description}</p>
                <p><img src={map} alt="map" className="google-api-sample-pic" /></p>
                <article className="details-buttons">
                    <button className="site-button">Save</button>
                    <button className="site-button" onClick={likeRestaurant}>Like</button>
                    <button className="site-button"onClick={deleteRestaurant}>Delete</button>
                    <Link to={`/edit/${match.params.id}`}><button className="site-button">Edit</button></Link>
                </article>
            </article>
        </>
    )
}

export default DetailsWithFunction;