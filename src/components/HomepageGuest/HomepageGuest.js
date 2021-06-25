import { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomepageGuest.css';


class HomepageGuest extends Component{
    render(){
        return (
    <main>
        <h1 className="welcome">Welcome to REST-aurant!</h1>
        <p className="lorem-ipsum">Here you can find reviews from real clients for a whole bunch of restaurants and various food places around the globe. Read reviews, check pros and cons and decide on which place you are willing to devote your sublime taste buds and delicate palate.<br/> Find new ideas and create your own content, starting today!</p>
        <p className="lorem-ipsum">Check out <Link to="/all-restaurants">all restaurants</Link> we currently have in our database.</p>
        <article className="all-restaurants-homepage">
            <article className="restaurant-card card-left-guest">
                <img src="https://www.mychoice.bg/wp-content/uploads/2020/05/959x578-restorant-1-1.jpg" alt="simeonovo-restaurant"/>
                <h4>Simeonovo Restaurant</h4>
                <p>"...offering exotically spiced vegetables, fish and meats, much of it cooked over a blazing open hearth..."</p>
            </article>
            <article className="restaurant-card card-middle-guest">
                <img src="https://socialcafe.bg/pics/restaurant/2.jpg" alt="boyana-restaurant"/>
                <h4>Lozenets Restaurant</h4>
                <p>"... this steakhouse on Vitosha blvd. is a place to see and be seen – whether imbibing handcrafted cocktails at the rooftop or second-story bars..."</p>
            </article>
            <article className="restaurant-card card-right-guest">
                <img src="https://rezzo.bg/files/images/14/fit_314_228.jpg" alt="bankya-restaurant"/>
                <h4>Dragalevtsi Restaurant</h4>
                <p>"...with city views, multiple bars, a dance floor and a varied American menu ranging from wings and burgers to mussels and crispy pork shoulder..."</p>
            </article>       
        </article>
        <article className="login-or-signup">
            <h2><Link to="/login">Login</Link> or <Link to="/register">create a profile</Link> to view all ratings</h2>
        </article>
    </main>
        )
    }
}

export default HomepageGuest;