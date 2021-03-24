import { Component } from "react";
import { style } from './Details.css';
import database from '../Database/Database';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import db from '../../firebase/firebase.config';

import map from './map.jpeg'


class Details extends Component{
    constructor(props){
        super(props)
        this.state = {}
        this.getOneRestaurant = this.getOneRestaurant.bind(this);
    }
    getOneRestaurant(id){
        db.collection('restaurants')
            .doc(id)
            .get()
            .then(res => this.setState({...res.data()}))
    }
    componentDidMount(){
        this.getOneRestaurant(this.props.match.params.id);
    }
    likeRestaurant(){
        this.setState((prevState) => ({ ratedBy: prevState.ratedBy + 1 }))
    }
    render(){
        return(
            <>
            <h1 className="details-heading">{this.state.name}</h1>
            <article className="restaurant-details-cointainer">
                <img src={this.state.imageUrl} alt={this.state.name} />
                <h1 className="restaurant-details-name">{this.state.location}</h1>
                <h3 className="rated-by">Liked by {this.state.ratedBy} people</h3>
                <h3 className="rated-by">Average rating: {this.state.rating} *</h3>
                <p className="restaurant-details-description">{this.state.description}</p>
                <p><img src={map} alt="map" className="google-api-sample-pic" /></p>
                <article className="details-buttons">
                    <button className="site-button">Save</button>
                    <button className="site-button" onClick={()=>{this.likeRestaurant()}}>Like</button>
                </article>
            </article>
            </>
        )
    }
}

export default Details;