import { Component } from 'react';
import RestaurantHomepage from '../RestaurantHomepage/RestaurantHomepage';
import db from '../../firebase/firebase.config';
import database from '../Database/Database';


class Header extends Component{
    constructor(props){
        super(props)

        // this.state = {
            
        // }
    }

    componentDidMount(){
        
    }
    render(){

        return (
            <main>
                <h1 className="top-rated">Welcome, user!</h1>
                <h1 className="top-rated">Check out our current top rated restaurants: </h1>
                <article className="all-restaurants-homepage">
                </article>
            </main>
        )
    }
}

export default Header;