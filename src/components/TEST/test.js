import { Component } from 'react';
import { style } from './HomepageUser.css';
import RestaurantHomepage from '../RestaurantHomepage/RestaurantHomepage';
import db from '../../firebase/firebase.config';

class Header extends Component{
    constructor(props){
        super(props)

        // this.state = {
            
        // }
    }

    componentDidMount(){
        
    }
    render(){
        let response = db.collection('restaurants');
        response.get()
            .then(res => res.json)
            .then(resp => console.log(resp))

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