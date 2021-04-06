import { useContext, useEffect, useState } from 'react';
import { db } from '../../firebase/firebase.config';
import { AuthContext } from '../Auth/Auth';
import { getAllRestaurants } from '../../services/services';
import Restaurant from '../Restaurant/Restaurant';


function RatedRestaurants(){

    let [restaurants, setAllRestaurants] = useState([]);
        getAllRestaurants()
        .then(res => {
            let allRestaurants = []
            res.docs.forEach(restaurant => allRestaurants.push(restaurant.data()))
            setAllRestaurants(allRestaurants)
        })

    let allRatedRestaurants = restaurants.map(x => x = <Restaurant 
        key={x.id}
        imageUrl={x.imageUrl}
        name={x.name}
        description={x.description}
        location={x.location}
        rating={x.rating}
        id={x.id}/>)
    return(
        <>
        <ul>
        {allRatedRestaurants}
        </ul>
        </>
    )
}
export default RatedRestaurants;