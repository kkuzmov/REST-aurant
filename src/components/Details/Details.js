import { Component } from "react";
import { style } from './Details.css';

import map from './map.jpeg'


class Details extends Component{
    render(){
        return(
            <>
            <h1 className="details-heading">Restaurant details</h1>
            <article className="restaurant-details-cointainer">
                <img src="https://www.mychoice.bg/wp-content/uploads/2020/05/959x578-restorant-1-1.jpg" alt="simeonovo-restaurant" />
                <h1 className="restaurant-details-name">Simeonovo Restaurant</h1>
                <h3 className="rated-by">Rated by 40 people</h3>
                <h3 className="rated-by">Average rating: 4.5 *</h3>
                <p className="restaurant-details-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iste maxime. Quasi error harum architecto repellendus deserunt quaerat quisquam eaque aperiam dolor magnam est impedit molestias, nesciunt optio eveniet, quibusdam odit! Voluptatibus commodi, iste non neque quos accusamus autem voluptatem maiores doloribus minus. Nobis vel, praesentium nam eveniet sequi modi.</p>
                <p><img src={map} alt="map" className="google-api-sample-pic" /></p>
                <article className="details-buttons">
                    <button className="site-button">Save</button>
                    <button className="site-button">Like</button>
                </article>
            </article>
            </>
        )
    }
}

export default Details;