import React from 'react'
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

export default RestaurantHomepage



// class RestaurantHomepage extends Component {
//   render() {
//     let url = `/details/${this.props.id}`;

//     return (
//       <article className="restaurant-card card-user">
//         <img src={this.props.imageUrl} alt={this.props.name} />
//         <h4>{this.props.name}</h4>
//         <p className="restaurant-homepage-description">
//           "{this.props.description.slice(0, 50)}..."
//         </p>
//         <Link to={url}>
//           <button className="site-button homepage-button">Read more</button>
//         </Link>
//       </article>
//     );
//   }
// }

// export default RestaurantHomepage;
