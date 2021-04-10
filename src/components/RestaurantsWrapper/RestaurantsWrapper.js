import { Component } from 'react';
import { style } from './RestaurantsWrapper.css';
import { db } from '../../firebase/firebase.config';


import Restaurant from '../Restaurant/Restaurant';
 
class RestaurantsWrapper extends Component{
    constructor(props){
        super(props)
        this.state = {
            'restaurants': [],
            'currentRestaurants': []
        }
        this.getRestaurants = this.getRestaurants.bind(this);
        this.performSearch = this.performSearch.bind(this);
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
            this.setState({'currentRestaurants': allFetched})
        })
        .catch(err => console.log(err))
    }
    componentDidMount(){
        this.getRestaurants();
    }
    performSearch(event){
        event.preventDefault();
        let filteredResults = this.state.restaurants.filter(rest => 
            rest.name.toLowerCase().includes(event.target.search.value.toLowerCase())||
            rest.location.toLowerCase().includes(event.target.search.value.toLowerCase())||
            rest.description.toLowerCase().includes(event.target.search.value.toLowerCase())
        )
        this.setState({'currentRestaurants': filteredResults})
    }
    render(){
        let allRestaurants = this.state.currentRestaurants.map(x => x = <Restaurant 
            key={x.id}
            imageUrl={x.imageUrl}
            name={x.name}
            description={x.description}
            location={x.location}
            category={x.category}
            id={x.id}/>) || 'Loading...'

        return (
            <>
            <h1 className="page-heading">All restaurants</h1>
            <form onSubmit={this.performSearch}>
            <label htmlFor="search">Search here</label>
            <input type="search" name="search"></input>
            <input type="submit" value="Search" className='site-button'></input>
            </form>
            <article className="all-rated-restaurants">
                {allRestaurants}
            </article>
            </>
        )
    }
}

export default RestaurantsWrapper;