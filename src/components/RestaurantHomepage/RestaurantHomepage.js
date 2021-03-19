import { Component } from 'react';
import { style } from './RestaurantHomepage.css';
 
class RestaurantHomepage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <article className="restaurant-card card-user">
                <img src={this.props.imageUrl} alt={this.props.name}/>
                <h4>{this.props.name}</h4>
                <p>{this.props.description}</p>
                <button className="site-button">Read more</button>
            </article>
        )
    }
}

export default RestaurantHomepage;