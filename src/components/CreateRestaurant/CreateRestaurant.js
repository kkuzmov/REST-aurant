import { Component } from "react";
import { style } from './CreateRestaurant.css';

class CreateRestaurant extends Component{
    render(){
        return(
            <>
            <h1 className="page-heading">Create new restaurant</h1>
            <article className="authentication-container">
                <form action="#" className="create-restaurant-form">
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