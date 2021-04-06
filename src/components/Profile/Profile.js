import { Component } from 'react';
import { style } from './Profile.css';
import photo from './photo.jpg'
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../Auth/Auth';



 
function Profile(){
    const { currentUser } = useContext(AuthContext);

    if(!currentUser){
        return <Redirect to="/login" />
    }
    console.log(currentUser.photoURL)
        return (
            <>
            <h1 className="page-heading">My profile</h1>
            <article className="user-profile">
                <article className="user-info">
                    <img src={currentUser.photoURL} alt="user-profile" />
                    <h4 className="name">{currentUser.displayName}</h4>
                    <p className="email">{currentUser.email}</p>
                </article>
                <article className="user-ratings-and-created">
                    <article className="created-and-rated">
                    <h3 className="created-restaurants">11 places created by you</h3>
                    <button className="site-button">View all created</button>
                    </article>
                    <article className="created-and-rated">
                    <h3 className="rated-restaurants">11 places rated by you</h3>
                    <button className="site-button">View all rated</button>
                    </article>
                </article>
            </article>
            </>
        )
}

export default Profile;