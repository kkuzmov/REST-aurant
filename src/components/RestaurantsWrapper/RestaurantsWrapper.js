import { Component } from 'react';
import { style } from './RestaurantsWrapper.css';
import { db } from '../../firebase/firebase.config';


import Restaurant from '../Restaurant/Restaurant';
 
class RestaurantsWrapper extends Component{
    constructor(props){
        super(props)
        this.state = {
            'restaurants': []
        }
        this.getRestaurants = this.getRestaurants.bind(this);
    }
    getRestaurants(){
        db.collection('restaurants')
        .get()
        .then(res =>{
            let allFetched = []
            res.docs.forEach(restaurant => {
                allFetched.push({...restaurant.data(), id: restaurant.id})
            })
            this.setState({'restaurants': allFetched})
        })
    }
    componentDidMount(){
        this.getRestaurants();
    }
    render(){
        let allRestaurants = this.state.restaurants.map(x => x = <Restaurant 
            key={x.id}
            imageUrl={x.imageUrl}
            name={x.name}
            description={x.description}
            location={x.location}
            rating={x.rating}
            id={x.id}/>) || 'Loading...'

        return (
            <>
            <h1 className="page-heading">All restaurants</h1>
            <article className="all-rated-restaurants">
                {allRestaurants}
            </article>
            </>
        )
    }
}

export default RestaurantsWrapper;