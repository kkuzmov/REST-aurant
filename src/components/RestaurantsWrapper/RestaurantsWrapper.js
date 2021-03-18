import { Component } from 'react';
import { style } from './RestaurantsWrapper.css';
import Restaurant from '../Restaurant/Restaurant';
 
class RestaurantsWrapper extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <article className="all-rated-restaurants">
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
            </article>
        )
    }
}

export default RestaurantsWrapper;