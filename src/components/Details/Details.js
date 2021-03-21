import { Component } from "react";
import { style } from './Details.css';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';

import database from '../Database/Database';
import map from './map.jpeg'


class Details extends Component{
    render(){
        let restaurant = database.find(x => x.id == this.props.match.params.id);
        return(
            <>
            <h1 className="details-heading">{restaurant.name}</h1>
            <article className="restaurant-details-cointainer">
                <img src={restaurant.imageUrl} alt={restaurant.name} />
                <h1 className="restaurant-details-name">{restaurant.location}</h1>
                <h3 className="rated-by">Rated by {restaurant.ratedBy} people</h3>
                <h3 className="rated-by">Average rating: {restaurant.rating} *</h3>
                <p className="restaurant-details-description">{restaurant.description}</p>
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