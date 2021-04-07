import { useContext, useEffect, useState } from 'react';
import { db } from '../../firebase/firebase.config';
import { AuthContext } from '../Auth/Auth';
import Restaurant from '../Restaurant/Restaurant';
import {  useHistory } from 'react-router-dom';



function RatedRestaurants(){
    let history = useHistory();
    const { currentUser } = useContext(AuthContext);
    let [restaurants, setAllRestaurants] = useState([]);
    
    useEffect(()=>{
        if(currentUser == null){
            history.push('/login')
        }else{
        db.collection('restaurants')
            .where('creator', '==', currentUser.uid)
            .get()
            .then(res => {
            // console.log(res.docs[0].data()) - това е обект
            let allRestaurants = res.docs.map(restaurant => restaurant = {...restaurant.data(), id: restaurant.id})
            setAllRestaurants(allRestaurants)
        })
    }
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