import { Component } from 'react';
import RestaurantHomepage from '../RestaurantHomepage/RestaurantHomepage';
import db from '../../firebase/firebase.config';



class Header extends Component{
    constructor(props){
        super(props)

        this.state = {
            'restaurants': []
        }
    }

    componentDidMount(){
        db.collection('restaurants').get()
            .then(res =>{
                let allFetched = []
                res.docs.forEach(restaurant => {
                    allFetched.push({...restaurant.data()})
                })
                this.setState({'restaurants': allFetched})
            })
    }
    render(){
        console.log(this.state.restaurants)

        return (
            <main>
                <h1 className="top-rated">Welcome, user!</h1>
                <h1 className="top-rated">Check out our current top rated restaurants: </h1>
                <article className="all-restaurants-homepage">
                    {this.state.restaurants.map(x => x = <RestaurantHomepage imageUrl={x.imageUrl} name={x.name} description={x.description} id={x.id}/>)}
                </article>
            </main>
        )
    }
}

export default Header;