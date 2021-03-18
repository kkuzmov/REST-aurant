import { Component } from "react";
import { style } from './Details.css';

import map from './map.jpeg'


class Details extends Component{
    render(){
        return(
            <>
            <h1 class="details-heading">Restaurant details</h1>
            <article class="restaurant-details-cointainer">
                <img src="https://www.mychoice.bg/wp-content/uploads/2020/05/959x578-restorant-1-1.jpg" alt="simeonovo-restaurant" />
                <h1 class="restaurant-details-name">Simeonovo Restaurant</h1>
                <h3 class="rated-by">Rated by 40 people</h3>
                <h3 class="rated-by">Average rating: 4.5 *</h3>
                <p class="restaurant-details-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iste maxime. Quasi error harum architecto repellendus deserunt quaerat quisquam eaque aperiam dolor magnam est impedit molestias, nesciunt optio eveniet, quibusdam odit! Voluptatibus commodi, iste non neque quos accusamus autem voluptatem maiores doloribus minus. Nobis vel, praesentium nam eveniet sequi modi.</p>
                <p><img src={map} alt="map" class="google-api-sample-pic" /></p>
                <article class="details-buttons">
                    <button class="site-button">Save</button>
                    <button class="site-button">Like</button>
                </article>
            </article>
            </>
        )
    }
}

export default Details;