import { style } from './CreateRestaurant.css';
import db from '../../firebase/firebase.config';
import { Redirect } from "react-router";
import { useHistory } from 'react-router-dom';
import validator from '../../validator/validator';

function CreateRestaurant(){
    let history = useHistory();

   function create(event){
        event.preventDefault();
        let userInputNewRestaurant = {
            'name': event.target.name.value,
            'location': event.target.location.value,
            'rating': Number(event.target.rating.value),
            'description': event.target.description.value,
            'imageUrl': event.target.imageUrl.value,
        }
       if(validator(userInputNewRestaurant)){
           console.log('validator works!')
       }else{
        console.log('bad input!')
       }
        db.collection('restaurants')
            .add({...userInputNewRestaurant})
            .then(res => {
                history.push('/') 
            });
    }

        return(
            <>
            <h1 className="page-heading">Create new restaurant</h1>
            <article className="authentication-container">
                <form className="create-restaurant-form" onSubmit={create}>
                    <article className="form-input">
                        <input type="text" name="name" placeholder="Name" required />
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