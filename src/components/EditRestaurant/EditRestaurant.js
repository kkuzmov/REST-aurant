import { style } from './EditRestaurant.css';
import {db} from '../../firebase/firebase.config';
import { useHistory } from 'react-router-dom';
import testInput from '../../services/Helpers/createNewRestaurant';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Notification from '../Notifications/Notifications';
import { getOneRestaurant } from '../../services/services.js';
import { AuthContext } from '../Auth/Auth';


import { useState, useEffect, useContext } from 'react';

function EditRestaurant({ match }){
    let history = useHistory();
    const [ errMessage, setErrMessage ] = useState('');
    const [ notificationMessage, setNotificationMessage ] = useState('');

    let [restaurant, setRestaurant] = useState({});

    useEffect(()=>{
        getOneRestaurant(match.params.id)
        .then(res =>{
            let currentRestaurant = {...res.data()};
            setRestaurant(currentRestaurant)
        })
    }, [])
    const { currentUser } = useContext(AuthContext);

    if(!currentUser){
        history.push('/login');
    }

   function updateRestaurantInfo(event){
        event.preventDefault();
        let userInputNewRestaurant = {
            'name': event.target.name.value,
            'location': event.target.location.value,
            'rating': Number(event.target.rating.value),
            'description': event.target.description.value,
            'imageUrl': event.target.imageUrl.value,
        }
        if(testInput(userInputNewRestaurant)){
            let message = testInput(userInputNewRestaurant);
            setErrMessage(message);
        }else{
            db.collection('restaurants')
            .doc(match.params.id)
            .update({...userInputNewRestaurant})
            .then(res => {
                setNotificationMessage('Successfully edited restaurant!');
                setTimeout(()=> history.push('/'), 2500)
            });
        }
        
    }

        return(
            <>
            <h1 className="page-heading">Edit restaurant</h1>
            <article className="authentication-container">
                <form className="create-restaurant-form" onSubmit={updateRestaurantInfo}>
                    <article className="form-input">
                        <input type="text" name="name" defaultValue={restaurant.name}/>
                    </article>
                    <article className="form-input">
                        <input type="text" name="location" required  defaultValue={restaurant.location}/>
                    </article>
                    <article className="form-input">
                        <input type="number" min="1" max="5" step="0.5" name="rating" required defaultValue={restaurant.rating}/>
                    </article>
                    <article className="form-input textarea-input">
                        <textarea name="description" id="description" cols="39" rows="10" defaultValue={restaurant.description}></textarea>
                    </article>
                    <article className="form-input">
                        {/* <input type="file" id="photo" name="uploaded-picture" /> */}
                        <input type="url" name="imageUrl" defaultValue={restaurant.imageUrl}></input>
                    </article>
                    <button className="site-button">Create</button>
                    <ErrorMessage>{errMessage}</ErrorMessage>
                </form>
                <Notification>{notificationMessage}</Notification>
            </article>
        </>
        )
}

export default EditRestaurant;