import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Ellipsis } from "react-spinners-css";
import { AuthContext } from "../Auth/Auth";
import { db } from "../../firebase/firebase.config";
import RestaurantInAllRestaurants from "../RestaurantInAllRestaurants/RestaurantInAllRestaurants";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./RatedRestaurants.css";

function RatedRestaurants() {
  let history = useHistory();
  let [restaurants, setAllRestaurants] = useState([]);
  const [errMessage, setErrMessage] = useState("");
  const { currentUser } = useContext(AuthContext);
  let [currentRestaurants, setCurrentRestaurants] = useState([]);

  let allRatedRestaurants;

  useEffect(() => {
    if (currentUser == null) {
      history.push("/login");
    } else {
      db.collection("restaurants")
        .where("creator", "==", currentUser.uid)
        .get()
        .then((res) => {
          let allRestaurants = res.docs.map(
            (restaurant) =>
              (restaurant = { ...restaurant.data(), id: restaurant.id })
          );
          setAllRestaurants(allRestaurants);
          setCurrentRestaurants(allRestaurants);
        })
        .catch((err) => setErrMessage(err.message));
    }
  }, []);

  function performSearch(event) {
    event.preventDefault();
    let query = event.target.value.toLowerCase();

    let filteredResults = restaurants.filter(
      (rest) =>
        rest.name.toLowerCase().includes(query) ||
        rest.location.toLowerCase().includes(query) ||
        rest.description.toLowerCase().includes(query) ||
        rest.category.toLowerCase().includes(query)
    );
    setCurrentRestaurants(filteredResults);
  }


  return (
    <>
      <h1 className="page-heading">My reviews</h1>
      <form  className="search-form">
      <label htmlFor="search" className="search-label">
          Search by restaurant name, location or description
        </label>
        <input type="search" name="search" className="search-input" onChange={performSearch}></input>
      </form>
      <article className="all-rated-restaurants">
        {currentRestaurants.length == 0 ? (
          <Ellipsis color="#513C2C" size={100} />
        ) : (
          currentRestaurants.map((x) => (
            <RestaurantInAllRestaurants restaurant={x} key={x.id} />
          ))
        )}
      </article>
      <ErrorMessage>{errMessage}</ErrorMessage>
    </>
  );
}
export default RatedRestaurants;
