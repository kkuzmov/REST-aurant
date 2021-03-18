import { Component } from 'react';
import { style } from './HomepageUser.css';
import RestaurantHomepage from '../RestaurantHomepage/RestaurantHomepage';

class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <main>
            <h1 className="top-rated">Welcome, user!</h1>
            <h1 className="top-rated">Check out our current top rated restaurants: </h1>
            <article className="all-rated-restaurants">
                <RestaurantHomepage imageUrl="https://socialcafe.bg/pics/restaurant/2.jpg" name="Boyana Restaurant" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, autem."/>
                <RestaurantHomepage imageUrl="https://www.mychoice.bg/wp-content/uploads/2020/05/959x578-restorant-1-1.jpg" name="Simeonovo Restaurant" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, autem."/>  
                <RestaurantHomepage imageUrl="https://rezzo.bg/files/images/14/fit_314_228.jpg" name="Bankya Restaurant" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, autem."/>  
            </article>
        </main>
        )
    }
}

export default Header;