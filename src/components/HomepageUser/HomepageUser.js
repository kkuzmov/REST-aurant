import { Component } from 'react';
import { style } from './HomepageUser.css';
import Restaurant from '../Restaurant/Restaurant';

class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <main>
            <h1 class="top-rated">Welcome, user!</h1>
            <h1 class="top-rated">Check out our current top rated restaurants: </h1>
            <article class="all-rated-restaurants">
                <Restaurant imageUrl="https://socialcafe.bg/pics/restaurant/2.jpg" name="Boyana Restaurant" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, autem."/>
                <Restaurant imageUrl="https://www.mychoice.bg/wp-content/uploads/2020/05/959x578-restorant-1-1.jpg" name="Simeonovo Restaurant" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, autem."/>  
                <Restaurant imageUrl="https://rezzo.bg/files/images/14/fit_314_228.jpg" name="Bankya Restaurant" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, autem."/>  
            </article>
        </main>
        )
    }
}

export default Header;