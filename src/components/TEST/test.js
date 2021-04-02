import { Component } from 'react';
import RestaurantHomepage from '../RestaurantHomepage/RestaurantHomepage';
import {db} from '../../firebase/firebase.config';



class Header extends Component{
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
        console.log(this.state.restaurants)
        let allRestaurants = this.state.restaurants.map(x => x = <RestaurantHomepage key={x.id} imageUrl={x.imageUrl} name={x.name} description={x.description} id={x.id}/>) || 'Loading...'
        return (
            <main>
                <h1 className="top-rated">Welcome, user!</h1>
                <h1 className="top-rated">Check out our current top rated restaurants: </h1>
                <article className="all-restaurants-homepage">
                    {allRestaurants}
                </article>
            </main>
        )
    }
}

export default Header;