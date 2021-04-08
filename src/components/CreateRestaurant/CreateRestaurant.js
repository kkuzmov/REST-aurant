import { style } from './CreateRestaurant.css';
import {db} from '../../firebase/firebase.config';
import { Redirect, useHistory } from 'react-router-dom';
import testInput from '../../services/Helpers/createNewRestaurant';
import Notification from '../Notifications/Notifications';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useState, useContext } from 'react';

import { AuthContext } from '../Auth/Auth';

function CreateRestaurant(){
    let history = useHistory();
    const [ errMessage, setErrMessage ] = useState('');
    const [ notificationMessage, setNotificationMessage ] = useState('');
    const { currentUser } = useContext(AuthContext);
    if(!currentUser){
        return <Redirect to="/login" />
    }

    function create(event){
        event.preventDefault();
        let userInputNewRestaurant = {
            'name': event.target.name.value,
            'location': event.target.location.value,
            'rating': Number(event.target.rating.value),
            'description': event.target.description.value,
            'imageUrl': event.target.imageUrl.value,
            'category': event.target.category.value,
            'ratedBy': 0,
            'likedBy': [],
            'creator': currentUser.uid
        }
        if(testInput(userInputNewRestaurant)){
            let message = testInput(userInputNewRestaurant);
            setErrMessage(message);
        }else{
            db.collection('restaurants')
            .add({...userInputNewRestaurant})
            .then(res => {
                setErrMessage('');
                setNotificationMessage('New rating created!')
                setTimeout(() => {
                history.push('/') 
                }, 2500);
            });
        }
        
    }
 
    // function onBlurHandler(e){
    //     if(e.target.value.length < 10){
    //         setErrMessage('Name is too short!')
    //         return false;
    //     }else{
    //         setErrMessage('')
    //     }
    // }
        return(
            <>
            <h1 className="page-heading">Create new restaurant</h1>
            <article className="authentication-container">
                <form className="create-restaurant-form" onSubmit={create}>
                    <article className="form-input">
                        <input type="text" name="name" placeholder="Name" required/>
                    </article>
                    <article className="form-input">
                        <input type="text" name="location" placeholder="City" required />
                    </article>
                    <article className="form-input">
                        {/* <input type="select" min="1" max="5" step="0.5" name="rating" placeholder="Rating" required /> */}
                        <select name="category">
                            <option value="" disabled selected>Select your option</option>
                            <option value="Ethnic">Ethnic</option>
                            <option value="Fast food">Fast food</option>
                            <option value="Fast casual">Fast casual</option>
                            <option value="Casual dining">Casual dining</option>
                            <option value="Premium casual">Premium casual</option>
                            <option value="Family style">Family style</option>
                            <option value="Fine Dining">Fine Dining</option>
                        </select>
                    </article>
                    <article className="form-input textarea-input">
                        <textarea name="description" id="description" cols="34" rows="10" placeholder="Write a review here..."></textarea>
                    </article>
                    <article className="pros-and-cons">
                        <textarea type="text" name="pros" cols="14" rows="3" placeholder="Pros"></textarea>
                        <textarea type="text" name="cons" cols="14" rows="3" placeholder="Cons"></textarea>
                    </article>
                    <article className="form-input">
                        <input type="number" min="1" max="5" step="0.5" name="rating" placeholder="Rating" required />
                    </article>
                    <article className="form-input">
                        {/* <input type="file" id="photo" name="uploaded-picture" /> */}
                        <input type="url" name="imageUrl" placeholder="Place image link here" required></input>
                    </article>
                    <button className="site-button">Create</button>
                    <ErrorMessage>{errMessage}</ErrorMessage>
                </form>
                <Notification>{notificationMessage}</Notification>
            </article>
        </>
        )
}

export default CreateRestaurant;