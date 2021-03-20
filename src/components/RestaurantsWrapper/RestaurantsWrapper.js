import { Component } from 'react';
import { style } from './RestaurantsWrapper.css';
import database from '../Database/Database';

import Restaurant from '../Restaurant/Restaurant';
 
class RestaurantsWrapper extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let allRestaurants = database.map(x=> x = <Restaurant {...x}/>)

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