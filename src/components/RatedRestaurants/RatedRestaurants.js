import { useContext, useEffect, useState } from 'react';
import { db } from '../../firebase/firebase.config';
import { AuthContext } from '../Auth/Auth';
import { getAllRestaurants } from '../../services/services';
import Restaurant from '../Restaurant/Restaurant';


function RatedRestaurants({match}){
    console.log(match.params.id)
    let [restaurants, setAllRestaurants] = useState([]);
    useEffect(()=>{

        db.collection('restaurants')
            // .where('creator' === creator)
            .get()
            .then(res => {
            // console.log(res.docs[0].data()) - това е обект
            let allRestaurants = res.docs.map(restaurant => restaurant = {...restaurant.data(), id: restaurant.id})
            console.log(allRestaurants)

            setAllRestaurants(allRestaurants)

        })
    }, [])
        

    let allRatedRestaurants = restaurants.map(x => <Restaurant 
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