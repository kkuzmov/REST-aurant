import { Component } from 'react';
import { style } from './Restaurant.css';
 
class Restaurant extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <article class="restaurant-card card-user">
                <img src={this.props.imageUrl} alt="simeonovo-restaurant"/>
                <h4>{this.props.name}</h4>
                <p>{this.props.description}</p>
                <button class="site-button">Read more</button>
            </article>
        )
    }
}

export default Restaurant;