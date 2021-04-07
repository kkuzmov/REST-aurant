import { useContext, useEffect, useState } from 'react';
import { db } from '../../firebase/firebase.config';
import { AuthContext } from '../Auth/Auth';
import Restaurant from '../Restaurant/Restaurant';
import {  useHistory } from 'react-router-dom';



function LikedRestaurants(){
    let history = useHistory();
    const { currentUser } = useContext(AuthContext);
    let [restaurants, setAllRestaurants] = useState([]);
    
    useEffect(()=>{
        if(currentUser == null){
            history.push('/login')
        }else{
        db.collection('restaurants')
            .where('likedBy', 'array-contains', currentUser.uid)
            .get()
            .then(res => {
            let allRestaurants = res.docs.map(restaurant => restaurant = {...restaurant.data(), id: restaurant.id})
            setAllRestaurants(allRestaurants)
        })
    }
    }, [])
    
    let allLikedRestaurants = restaurants.map(x => <Restaurant 
        key={x.id}
        imageUrl={x.imageUrl}
        name={x.name}
        description={x.description}
        location={x.location}
        rating={x.rating}
        id={x.id}/>
    )

    return(
        <>
        <h1 className="page-heading">Restaurants liked</h1>
        <article className="all-rated-restaurants">
                {allLikedRestaurants}
        </article>
        </>
    )
}
export default LikedRestaurants;