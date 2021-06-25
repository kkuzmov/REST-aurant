import { Component } from "react";
import { Link } from "react-router-dom";

import "./Restaurant.css";

class Restaurant extends Component {
  render() {
    let url = `/details/${this.props.id}`;

    return (
      <article className="restaurant">
        <img src={this.props.imageUrl} alt={this.props.name} />
        <p className="restaurant-name">
          <i className="fas fa-utensils"></i> {this.props.name}
        </p>
        <p className="restaurant-city">
          <i className="fas fa-map-marker-alt"></i> {this.props.location}
        </p>
        <p className="restaurant-category">
          <i className="fas fa-fish"></i> {this.props.category}
        </p>
        <Link to={url}>
          <button className="restaurant-more-info site-button">
            Read more
          </button>
        </Link>
      </article>
    );
  }
}

export default Restaurant;
