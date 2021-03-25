import { Component } from "react";
import { style } from './CreateRestaurant.css';
import db from '../../firebase/firebase.config';


class CreateRestaurant extends Component{
    constructor(props){
        super(props)
        this.state = {}
        this.create = this.create.bind(this);
    }


    create(event){
        event.preventDefault();
        let userInputNewRestaurant = {
            'name': event.target.name.value,
            'city': event.target.city.value,
            'rating': Number(event.target.rating.value),
            'description': event.target.description.value,
        }
        db.collection('restaurants')
            .add({...userInputNewRestaurant})
            .then(res => console.log(res));
    }

    render(){
        return(
            <>
            <h1 className="page-heading">Create new restaurant</h1>
            <article className="authentication-container">
                <form className="create-restaurant-form" onSubmit={this.create}>
                    <article className="form-input">
                        <input type="text" name="name" placeholder="Name" required />
                    </article>
                    <article className="form-input">
                        <input type="text" name="city" placeholder="City" required />
                    </article>

                    <article className="form-input">
                        <input type="number" min="1" max="5"name="rating" placeholder="Rating" required />
                    </article>
                    <article className="form-input textarea-input">
                        <textarea name="description" id="description" cols="39" rows="10" placeholder="Write a review here..."></textarea>
                    </article>
                    <article className="form-input">
                        <input type="file" id="photo" name="uploaded-picture" />
                    </article>
                    <button className="site-button">Create</button>
                </form>
            </article>
        </>
        )
    }
}

export default CreateRestaurant;