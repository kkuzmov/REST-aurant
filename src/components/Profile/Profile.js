import { style } from './Profile.css';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../Auth/Auth';
import { Link } from 'react-router-dom';




 
function Profile(){
    const { currentUser } = useContext(AuthContext);
    if(currentUser === null){
        return <Redirect to="/login" />
    }
    // let url = `${currentUser.uid}/rated-restaurants`
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
                    <h3 className="created-restaurants">Places rated by you</h3>
                    <Link to={`${currentUser.uid}/rated-restaurants`}><button className="site-button">View all rated</button></Link>                
                    </article>
                    <article className="created-and-rated">
                    <h3 className="rated-restaurants">Places you liked</h3>
                    <Link to={`${currentUser.uid}/liked-restaurants`}><button className="site-button">View all liked</button></Link>                
                    </article>
                </article>
            </article>
            </>
        )
}

export default Profile;