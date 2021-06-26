import { Component } from "react";
import { Ellipsis } from "react-spinners-css";
import { db } from "../../firebase/firebase.config";
import RestaurantInAllRestaurants from "../RestaurantInAllRestaurants/RestaurantInAllRestaurants";

import "./AllRestaurants.css";

class AllRestaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRestaurants: [],
      restaurantsToFilter: [],
    };
    this.getRestaurants = this.getRestaurants.bind(this);
    this.performSearch = this.performSearch.bind(this);
  }
  getRestaurants() {
    db.collection("restaurants")
      .get()
      .then((res) => {
        let allFetched = [];
        res.docs.forEach((restaurant) => {
          allFetched.push({ ...restaurant.data(), id: restaurant.id });
        });
        this.setState({ currentRestaurants: allFetched });
        this.setState({ restaurantsToFilter: allFetched });
      })
      .catch((err) => console.log(err));
  }
  componentDidMount() {
    this.getRestaurants();
  }

  performSearch(event) {
    event.preventDefault();
    let query = event.target.value.toLowerCase();
    let filteredResults = this.state.restaurantsToFilter.filter(
      (rest) =>
        rest.name.toLowerCase().includes(query) ||
        rest.location.toLowerCase().includes(query) ||
        rest.description.toLowerCase().includes(query) ||
        rest.category.toLowerCase().includes(query)
    );
    this.setState({ currentRestaurants: filteredResults });
  }
  render() {
    return (
      <>
        <h1 className="page-heading">All restaurants</h1>
        <form className="search-form">
          <label htmlFor="search" className="search-label">
            Search by restaurant name, location or description
          </label>
          <input
            type="search"
            name="search"
            className="search-input"
            onChange={this.performSearch}
          ></input>
        </form>
        <article className="all-rated-restaurants">
          {this.state.currentRestaurants.length === 0 ? (
            <Ellipsis color="#513C2C" size={100} />
          ) : (
            this.state.currentRestaurants.map((x) => (
              <RestaurantInAllRestaurants restaurant={x} key={x.id} />
            ))
          )}
        </article>
      </>
    );
  }
}

export default AllRestaurants;
