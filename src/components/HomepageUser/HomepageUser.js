import { style } from './HomepageUser.css';

import { Component } from 'react';
import RestaurantHomepage from '../RestaurantHomepage/RestaurantHomepage';
import {db} from '../../firebase/firebase.config';



class HomepageUser extends Component{
    constructor(props){
        super(props)

        this.state = {
            'restaurants': []
        }
        this.isMountedVal = 0;
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
            allFetched = allFetched.sort((a, b) => b.ratedBy - a.ratedBy).slice(0, 3)
            this.setState({'restaurants': allFetched})
        })
    }
    componentDidMount(){
        this.isMountedVal = 1;
        this.getRestaurants();
    }
    componentWillUnmount(){
		this.isMountedVal = 0;
	}
    updateState = (stateObj) => {
		if(this.isMountedVal){
			this.setState(stateObj);
		}
	}
    render(){
        let allRestaurants = this.state.restaurants.map(x => x = <RestaurantHomepage key={x.id} imageUrl={x.imageUrl} name={x.name} description={x.description} id={x.id} ratedBy={x.ratedBy}/>) || 'Loading...'
        return (
            <main>
                <h1 className="top-rated">Welcome, {this.props.username}!</h1>
                <h1 className="top-rated">Check out our current top rated restaurants: </h1>
                <article className="all-restaurants-homepage">
                    {allRestaurants}
                </article>
            </main>
        )
    }
}

export default HomepageUser;