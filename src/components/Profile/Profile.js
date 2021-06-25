import { useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import { AuthContext } from "../Auth/Auth";

import  "./Profile.css";


function Profile() {
  const { currentUser } = useContext(AuthContext);
  if (currentUser === null) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <h1 className="page-heading">My profile</h1>
      <article className="user-profile">
        <article className="user-info">
          <img src={currentUser.photoURL} alt="user-profile" />
          <p className="name-tag">Name:</p>
          <h4 className="name">{currentUser.displayName}</h4>
          <p className="email-tag">Email:</p>
          <h4 className="email">{currentUser.email}</h4>
        </article>
        <article className="user-ratings-and-created">
          <article className="created-and-rated">
            <h3 className="created-restaurants">Places rated by you</h3>
            <Link to={`${currentUser.uid}/rated-restaurants`}>
              <button className="site-button">View all rated</button>
            </Link>
          </article>
          <article className="created-and-rated">
            <h3 className="rated-restaurants">Places you liked</h3>
            <Link to={`${currentUser.uid}/liked-restaurants`}>
              <button className="site-button">View all liked</button>
            </Link>
          </article>
        </article>
      </article>
    </>
  );
}

export default Profile;
