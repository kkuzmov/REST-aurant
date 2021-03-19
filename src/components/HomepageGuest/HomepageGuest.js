import { Component } from 'react';
import { style } from './HomepageGuest.css';


class HomepageGuest extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
    <main>
        <h1 className="welcome">Welcome to REST-aurant!</h1>
        <p className="lorem-ipsum">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis alias ullam repudiandae quos voluptatum debitis vero dicta error soluta perferendis et eveniet quidem, aliquid quas assumenda non? Eligendi, sit voluptatum.</p>
        <article className="all-restaurants-homepage">
            <article className="restaurant-card card-left-guest">
                <img src="https://www.mychoice.bg/wp-content/uploads/2020/05/959x578-restorant-1-1.jpg" alt="simeonovo-restaurant"/>
                <h4>Simeonovo Restaurant</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, autem.</p>
            </article>
            <article className="restaurant-card card-middle-guest">
                <img src="https://socialcafe.bg/pics/restaurant/2.jpg" alt="boyana-restaurant"/>
                <h4>Boyana Restaurant</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, autem.</p>
            </article>
            <article className="restaurant-card card-right-guest">
                <img src="https://rezzo.bg/files/images/14/fit_314_228.jpg" alt="bankya-restaurant"/>
                <h4>Bankya Restaurant</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, autem.</p>
            </article>       
        </article>
        <article className="login-or-signup">
            <h2><a href="#">Login</a> or <a href="#">create a profile</a> to view all ratings</h2>
        </article>
    </main>
        )
    }
}

export default HomepageGuest;