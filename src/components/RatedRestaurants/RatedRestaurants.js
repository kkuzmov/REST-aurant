import { useContext, useEffect, useState } from 'react';
import { db } from '../../firebase/firebase.config';
import { AuthContext } from '../Auth/Auth';
import Restaurant from '../Restaurant/Restaurant';
import {  useHistory } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';



function RatedRestaurants(){
    let history = useHistory();
    const { currentUser } = useContext(AuthContext);
    let [restaurants, setAllRestaurants] = useState([]);
    const [ errMessage, setErrMessage ] = useState('');

    let allRatedRestaurants;
    useEffect(()=>{
        if(currentUser == null){
            history.push('/login')
        }else{
        db.collection('restaurants')
            .where('creator', '==', currentUser.uid)
            .get()
            .then(res => {
            let allRestaurants = res.docs.map(restaurant => restaurant = {...restaurant.data(), id: restaurant.id})
            setAllRestaurants(allRestaurants)
        })
        .catch(err => setErrMessage(err.message))
    }
    }, [])
    if(restaurants.length > 0){
        allRatedRestaurants = restaurants.map(x => <Restaurant 
            key={x.id}
            imageUrl={x.imageUrl}
            name={x.name}
            description={x.description}
            location={x.location}
            category={x.category}
            rating={x.rating}
            id={x.id}/>
        )
    }else{
        allRatedRestaurants = <h1>You have made no reviews yet...</h1>
    }


    return(
        <>
        <h1 className="page-heading">My rated restaurants</h1>
        <article className="all-rated-restaurants">
                {allRatedRestaurants}
        </article>
        <ErrorMessage>{errMessage}</ErrorMessage>
        </>
    )
}
export default RatedRestaurants;