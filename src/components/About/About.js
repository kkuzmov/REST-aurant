import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllRestaurants } from "../../services/services";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import "./About.css";

function About() {
  const [restaurantsCount, setRestaurantsCount] = useState(0);
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    getAllRestaurants()
      .then((res) => setRestaurantsCount(res.docs.length - 1))
      .catch((err) => {
        setErrMessage(err.message);
      });
  }, []);

  return (
    <>
      <h1 className="page-heading">About us</h1>
      <section className="about-page">
        <p className="about-info">
          &copy; REST-aurant is a project, created for foodies by a foodie
          myself. &copy; REST-aurant uses REST principles to deliver up-to-date
          information and recomendations about all kinds of food places
          everywhere in the foodie world. Enjoy existing reviews and create your
          own. Expect future improvements and application expansions as users
          grow!
        </p>
        <h2>
          Currently we have more than {restaurantsCount} restaurant reviews in
          our database!
        </h2>
        <h2>
          <Link to="/register" className="join-us">
            Join us
          </Link>{" "}
          and create your own ratings and reviews!
        </h2>
        <ErrorMessage>{errMessage}</ErrorMessage>
      </section>
    </>
  );
}

export default About;
