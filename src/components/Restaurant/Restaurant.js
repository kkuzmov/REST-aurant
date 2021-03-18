import { Component } from 'react';
import { style } from './Restaurant.css';
 
class Restaurant extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <article className="restaurant">
                <img src="https://rezzo.bg/files/images/14/fit_314_228.jpg" alt="simeonovo-restaurant" />
                <p className="restaurant-name"><i className="fas fa-utensils"></i> Bankya restaurant</p>
                <p className="restaurant-city"><i className="fas fa-map-marker-alt"></i> Sofia</p>
                <p className="restaurant-rating"><i className="fas fa-smile"></i> 4.4</p>
                <button className="restaurant-more-info site-button">Read more</button>
            </article>
        )
    }
}

export default Restaurant;