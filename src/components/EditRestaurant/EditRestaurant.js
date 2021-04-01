import { style } from './EditRestaurant.css';
import db from '../../firebase/firebase.config';
import { useHistory } from 'react-router-dom';
import testInput from '../../services/Helpers/createNewRestaurant';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getOneRestaurant } from '../../services/services.js';

import { useState, useEffect } from 'react';

function EditRestaurant({ match }){
    let history = useHistory();
    const [ errMessage, setErrMessage ] = useState('');

    let [restaurant, setRestaurant] = useState({});

    useEffect(()=>{
        getOneRestaurant(match.params.id)
        .then(res =>{
            let currentRestaurant = {...res.data()};
            setRestaurant(currentRestaurant)
        })
    }, [])

//    function create(event){
//         event.preventDefault();
//         let userInputNewRestaurant = {
//             'name': event.target.name.value,
//             'location': event.target.location.value,
//             'rating': Number(event.target.rating.value),
//             'description': event.target.description.value,
//             'imageUrl': event.target.imageUrl.value,
//             'ratedBy': 0,
//             'rating': 3
//         }
//         if(testInput(userInputNewRestaurant)){
//             let message = testInput(userInputNewRestaurant);
//             setErrMessage(message);
//         }else{
//             db.collection('restaurants')
//             .add({...userInputNewRestaurant})
//             .then(res => {
//                 history.push('/') 
//             });
//         }
        
//     }

        return(
            <>
            <h1 className="page-heading">Edit restaurant</h1>
            <article className="authentication-container">
                <form className="create-restaurant-form">
                    <article className="form-input">
                        <input type="text" name="name" value={restaurant.name}/>
                    </article>
                    <article className="form-input">
                        <input type="text" name="location" required  value={restaurant.location}/>
                    </article>

                    <article className="form-input">
                        <input type="number" min="1" max="5" step="0.5" name="rating" required value={restaurant.rating}/>
                    </article>
                    <article className="form-input textarea-input">
                        <textarea name="description" id="description" cols="39" rows="10" value={restaurant.description}></textarea>
                    </article>
                    <article className="form-input">
                        {/* <input type="file" id="photo" name="uploaded-picture" /> */}
                        <input type="url" name="imageUrl" value={restaurant.imageUrl}></input>
                    </article>
                    <button className="site-button">Create</button>
                    <ErrorMessage>{errMessage}</ErrorMessage>
                </form>
            </article>
        </>
        )
}

export default EditRestaurant;