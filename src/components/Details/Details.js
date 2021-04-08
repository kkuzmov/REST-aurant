import { style } from './Details.css';
import { Link,useHistory } from 'react-router-dom';
import {db} from '../../firebase/firebase.config';
import { getOneRestaurant } from '../../services/services.js';
import Notification from '../Notifications/Notifications';
import { AuthContext } from '../Auth/Auth';

import { useContext, useEffect, useState } from 'react';

function DetailsWithFunction({match}){
    let history = useHistory();
    const [ notificationMessage, setNotificationMessage ] = useState('');
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

    if(!currentUser){
        history.push('/login')
    }
  
    // add like to likes

    function likeRestaurant(){
        let incrementedLikes = restaurant.ratedBy + 1;
        restaurant.likedBy.push(currentUser.uid)
        db.collection('restaurants')
            .doc(match.params.id)
            .update({ratedBy: incrementedLikes, likedBy: restaurant.likedBy})
            .then(rest => {
                setRestaurant(state => ({...state, ratedBy: incrementedLikes}))
            })
    }
    function deleteRestaurant(){
        db.collection('restaurants')
            .doc(match.params.id)
            .delete()
            .then(res =>{
                setNotificationMessage('Restaurant deleted!');
                setTimeout(()=> history.push('/'), 2500)
            })
    }
    if(restaurant.creator === currentUser?.uid){
       return <>
            <h1 className="details-heading">{restaurant.name}</h1>
            <h1 className="restaurant-details-name">{restaurant.location}</h1>
            <article className="restaurant-details-cointainer">
                <img src={restaurant.imageUrl} alt={restaurant.name} />
                <h3 className="rated-by">Liked by {restaurant.ratedBy} people</h3>
                <h2 className="restaurant-details-description-heading">Description</h2>
                <p className="restaurant-details-description">{restaurant.description}</p>
                <section className="pros-and-cons-details">
                    <section className="heading-and-text-pros-cons">
                        <h3>Pros</h3>
                        <p className="pros">{restaurant.pros || 'No pros around here. Mistakes have been made.'}</p>
                    </section>
                    <section className="heading-and-text-pros-cons">
                        <h3>Cons</h3>
                        <p className="cons">{restaurant.cons|| 'No cons around here. Take my money pleeease!'}</p>
                    </section>
                </section>
                {/* <p><img src={map} alt="map" className="google-api-sample-pic" /></p> */}
                <article className="details-buttons">
                    <button className="site-button"onClick={deleteRestaurant}>Delete</button>
                    <Link to={`/edit/${match.params.id}`}><button className="site-button">Edit</button></Link>
                </article>
                <Notification>{notificationMessage}</Notification>

            </article>
        </>
    }else{
        return(
            <>
                <h1 className="details-heading">{restaurant.name}</h1>
                <article className="restaurant-details-cointainer">
                    <img src={restaurant.imageUrl} alt={restaurant.name} />
                    <h1 className="restaurant-details-name">{restaurant.location}</h1>
                    <h3 className="rated-by">Liked by {restaurant.ratedBy} people</h3>
                    <p className="restaurant-details-description">{restaurant.description}</p>
                    <article className="details-buttons">
                        <button className="site-button">Save</button>
                        <button className="site-button" onClick={likeRestaurant}>Like</button>
                    </article>
                    <Notification>{notificationMessage}</Notification>
    
                </article>
            </>
        )
    }
    
}

export default DetailsWithFunction;