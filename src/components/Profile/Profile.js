import { Component } from 'react';
import { style } from './Profile.css';
import photo from './photo.jpg'
 
class Profile extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
            <h1 class="page-heading">My profile</h1>
            <article class="user-profile">
                <article class="user-info">
                    <img src={photo} alt="user-profile-picture" />
                    <h4 class="name">Krum Kuzmov</h4>
                    <p class="email">kkuzmov@yahoo.zom</p>
                </article>
                <article class="user-ratings-and-created">
                    <article class="created-and-rated">
                    <h3 class="created-restaurants">11 places created by you</h3>
                    <button class="site-button">View all created</button>
                    </article>
                    <article class="created-and-rated">
                    <h3 class="rated-restaurants">11 places rated by you</h3>
                    <button class="site-button">View all rated</button>
                    </article>
                </article>
            </article>
            </>
        )
    }
}

export default Profile;