import { style } from './CreateRestaurant.css';
import db from '../../firebase/firebase.config';
import { Redirect } from "react-router";
import { useHistory } from 'react-router-dom';
import validator from '../../validator/validator';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useState } from 'react';

function CreateRestaurant(){
    let history = useHistory();
    const [ errMessage, setErrMessage ] = useState('');

   function create(event){
        event.preventDefault();
        let userInputNewRestaurant = {
            'name': event.target.name.value,
            'location': event.target.location.value,
            'rating': Number(event.target.rating.value),
            'description': event.target.description.value,
            'imageUrl': event.target.imageUrl.value,
        }
       
        db.collection('restaurants')
            .add({...userInputNewRestaurant})
            .then(res => {
                history.push('/') 
            });
    }

    function onBlurHandler(e){
        console.log(e.target.value);
        if(e.target.value.length < 10){
            setErrMessage('Name is too short!')
        }else{
            setErrMessage('')
        }
    }

        return(
            <>
            <h1 className="page-heading">Create new restaurant</h1>
            <ErrorMessage>{errMessage}</ErrorMessage>

            <article className="authentication-container">
                <form className="create-restaurant-form" onSubmit={create}>
                    <article className="form-input">
                        <input type="text" name="name" placeholder="Name" required onBlur={onBlurHandler} />
                    </article>
                    <article className="form-input">
                        <input type="text" name="location" placeholder="City" required />
                    </article>

                    <article className="form-input">
                        <input type="number" min="1" max="5"name="rating" placeholder="Rating" required />
                    </article>
                    <article className="form-input textarea-input">
                        <textarea name="description" id="description" cols="39" rows="10" placeholder="Write a review here..."></textarea>
                    </article>
                    <article className="form-input">
                        {/* <input type="file" id="photo" name="uploaded-picture" /> */}
                        <input type="url" name="imageUrl" placeholder="Place image link here." required></input>
                    </article>
                    <button className="site-button">Create</button>
                </form>
            </article>
        </>
        )
}

export default CreateRestaurant;