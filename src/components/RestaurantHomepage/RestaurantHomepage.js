import { Component } from 'react';
import { style } from './RestaurantHomepage.css';
import { Link } from 'react-router-dom';
 
class RestaurantHomepage extends Component{
    render(){
        let url = `/details/${this.props.id}`

        return (
            <article className="restaurant-card card-user">
                <img src={this.props.imageUrl} alt={this.props.name}/>
                <h4>{this.props.name}</h4>
                <p>"{this.props.description.slice(0, 50)}..."</p>
                {/* <p>Liked by {this.props.ratedBy} users</p> */}
                <Link to={url}><button className="site-button homepage-button">Read more</button></Link>
                
            </article>
        )
    }
}

export default RestaurantHomepage;