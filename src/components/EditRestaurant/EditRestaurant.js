import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Auth/Auth";
import { db } from "../../firebase/firebase.config";
import testInput from "../../services/Helpers/createNewRestaurant";
import { getOneRestaurant } from "../../services/services.js";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Notification from "../Notifications/Notifications";

import "./EditRestaurant.css";

function EditRestaurant({ match }) {
  let history = useHistory();
  const [errMessage, setErrMessage] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");

  let [restaurant, setRestaurant] = useState({});
  let id = match.params.id;
  useEffect(() => {
    getOneRestaurant(id)
      .then((res) => {
        let currentRestaurant = { ...res.data() };
        setRestaurant(currentRestaurant);
      })
      .catch((err) => setErrMessage(err.message));
  }, []);
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    history.push("/login");
  }

  function updateRestaurantInfo(event) {
    event.preventDefault();
    let userInput = event.target;
    let userInputNewRestaurant = {
      name: userInput.name.value,
      location: userInput.location.value,
      rating: Number(userInput.rating.value),
      description: userInput.description.value,
      imageUrl: userInput.imageUrl.value,
      category: userInput.category.value,
      pros: userInput.pros.value,
      cons: userInput.cons.value,
    };
    if (testInput(userInputNewRestaurant)) {
      let message = testInput(userInputNewRestaurant);
      setErrMessage(message);
    } else {
      db.collection("restaurants")
        .doc(match.params.id)
        .update({ ...userInputNewRestaurant })
        .then((res) => {
          setNotificationMessage("Successfully edited restaurant!");
          setTimeout(() => history.push("/"), 2500);
        })
        .catch((err) => setErrMessage(err.message));
    }
  }

  return (
    <>
      <h1 className="page-heading">Edit restaurant</h1>
      <article className="authentication-container">
        <form
          className="create-restaurant-form"
          onSubmit={updateRestaurantInfo}
        >
          <article className="form-input">
            <input type="text" name="name" defaultValue={restaurant.name} />
          </article>
          <article className="form-input">
            <input
              type="text"
              name="location"
              required
              defaultValue={restaurant.location}
            />
          </article>
          <article className="form-input">
            <input
              type="number"
              min="1"
              max="5"
              step="0.5"
              name="rating"
              required
              defaultValue={restaurant.rating}
            />
          </article>
          <article className="form-input">
            <select name="category">
              <option value="" defaultValue selected>
                Select your option
              </option>
              <option value="Ethnic">Ethnic</option>
              <option value="Fast food">Fast food</option>
              <option value="Fast casual">Fast casual</option>
              <option value="Casual dining">Casual dining</option>
              <option value="Premium casual">Premium casual</option>
              <option value="Family style">Family style</option>
              <option value="Fine Dining">Fine Dining</option>
            </select>
          </article>
          <article className="form-input textarea-input">
            <textarea
              name="description"
              id="description"
              cols="39"
              rows="10"
              defaultValue={restaurant.description}
            ></textarea>
          </article>
          <article className="pros-and-cons">
            <textarea
              type="text"
              name="pros"
              cols="14"
              rows="3"
              defaultValue={restaurant.pros}
            ></textarea>
            <textarea
              type="text"
              name="cons"
              cols="14"
              rows="3"
              defaultValue={restaurant.cons}
            ></textarea>
          </article>
          <article className="form-input">
            <input
              type="url"
              name="imageUrl"
              defaultValue={restaurant.imageUrl}
            ></input>
          </article>
          <button className="site-button">Create</button>
          <ErrorMessage>{errMessage}</ErrorMessage>
        </form>
        <Notification>{notificationMessage}</Notification>
      </article>
    </>
  );
}

export default EditRestaurant;
