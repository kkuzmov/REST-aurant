import React from "react";
import { Link } from "react-router-dom";

import "./RestaurantHomepage.css";

function RestaurantHomepage({ restaurant }) {
  return (
    <article className="restaurant-card card-user">
      <img src={restaurant.imageUrl} alt={restaurant.name} />
      <h4>{restaurant.name}</h4>
      <p className="restaurant-homepage-description">
        "{restaurant.description.slice(0, 50)}..."
      </p>
      <Link to={`/details/${restaurant.id}`}>
        <button className="site-button homepage-button">Read more</button>
      </Link>
    </article>
  );
}

export default RestaurantHomepage;
