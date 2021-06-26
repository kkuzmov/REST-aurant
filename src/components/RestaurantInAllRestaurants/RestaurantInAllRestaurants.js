import React from "react";
import { Link } from "react-router-dom";

import "./RestaurantInAllRestaurants.css";

function RestaurantInAllRestaurants({ restaurant }) {
  return (
    <article className="restaurant">
      <img src={restaurant.imageUrl} alt={restaurant.name} />
      <p className="restaurant-name">
        <i className="fas fa-utensils"></i> {restaurant.name}
      </p>
      <p className="restaurant-city">
        <i className="fas fa-map-marker-alt"></i> {restaurant.location}
      </p>
      <p className="restaurant-category">
        <i className="fas fa-fish"></i> {restaurant.category}
      </p>
      <Link to={`/details/${restaurant.id}`}>
        <button className="restaurant-more-info site-button">Read more</button>
      </Link>
    </article>
  );
}

export default RestaurantInAllRestaurants;
