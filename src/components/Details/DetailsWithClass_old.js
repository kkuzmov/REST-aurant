import { Component } from "react";
import { style } from './Details.css';
import database from '../Database/Database';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import {db} from '../../firebase/firebase.config';
import { getOneRestaurant } from '../../services/services.js';

import map from './map.jpeg'


class Details extends Component{
    constructor(props){
        super(props)
        this.state = {}
        this.getOne = this.getOne.bind(this);
        this.likeRestaurant = this.likeRestaurant.bind(this);
        this.deleteRestaurant = this.deleteRestaurant.bind(this);
    }
    getOne(id){
        getOneRestaurant(id)
            .then(res => {
                this.setState({...res.data()})
            })
    }
    componentDidMount(){
        this.getOne(this.props.match.params.id);
    }
    likeRestaurant(){
        db.collection('restaurants')
            .doc(this.props.match.params.id)
            .update({ratedBy: this.state.ratedBy + 1})
            .then(res => {
                this.setState((prevState) => ({ ratedBy: prevState.ratedBy + 1 }));
                console.log(res)
            })
    }
    deleteRestaurant(){
        db.collection('restaurants')
        .doc(this.props.match.params.id)
        .delete()
        .then(res => {
            setTimeout(()=>{ return this.setState({'redirect': true}) }, 2000);
        });
    }
    render(){
        if(this.state.redirect){
            return <Redirect to="/" /> 
        }
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
                    <button className="site-button" onClick={this.likeRestaurant}>Like</button>
                    <button className="site-button"onClick={this.deleteRestaurant}>Delete</button>
                </article>
            </article>
            </>
        )
    }
}

export default Details;