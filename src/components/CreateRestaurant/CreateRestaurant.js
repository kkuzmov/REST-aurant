import { Component } from "react";
import { style } from './CreateRestaurant.css';

class CreateRestaurant extends Component{
    render(){
        return(
            <>
            <h1 class="create-restaurant-heading">Create new restaurant</h1>
            <article class="authentication-container">
                <form action="#" class="create-restaurant-form">
                    <article class="form-input">
                        <input type="text" name="name" placeholder="Name" required />
                    </article>
                    <article class="form-input">
                        <input type="text" name="city" placeholder="City" required />
                    </article>

                    <article class="form-input">
                        <input type="number" min="1" max="5"name="rating" placeholder="Rating" required />
                    </article>
                    <article class="form-input textarea-input">
                        <textarea name="description" id="description" cols="39" rows="10" placeholder="Write a review here..."></textarea>
                    </article>
                    <article class="form-input">
                        <input type="file" id="photo" name="uploaded-picture" />
                    </article>
                    <button class="site-button">Create</button>
                </form>
            </article>
        </>
        )
    }
}

export default CreateRestaurant;