import { Component } from 'react';
import { style } from './HomepageUser.css';
 
class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <main>
            <h1 class="top-rated">Welcome, user!</h1>
            <h1 class="top-rated">Check out our current top rated restaurants: </h1>
            <article class="all-rated-restaurants">
                <article class="restaurant-card card-user">
                    <img src="https://www.mychoice.bg/wp-content/uploads/2020/05/959x578-restorant-1-1.jpg" alt="simeonovo-restaurant"/>
                    <h4>Simeonovo Restaurant</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, autem.</p>
                    <button class="site-button">Read more</button>
                </article>
                <article class="restaurant-card card-user">
                    <img src="https://socialcafe.bg/pics/restaurant/2.jpg" alt="boyana-restaurant"/>
                    <h4>Boyana Restaurant</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, autem.</p>
                    <button class="site-button">Read more</button>
                </article>
                <article class="restaurant-card card-user">
                    <img src="https://rezzo.bg/files/images/14/fit_314_228.jpg" alt="bankya-restaurant"/>
                    <h4>Bankya Restaurant</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, autem.</p>
                    <button class="site-button">Read more</button>
                </article>       
            </article>
        </main>
        )
    }
}

export default Header;