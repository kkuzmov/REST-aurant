import { useContext, useEffect, useState } from 'react';
import { db } from '../../firebase/firebase.config';
import { AuthContext } from '../Auth/Auth';
import Restaurant from '../Restaurant/Restaurant';
import {  useHistory } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { style } from './RatedRestaurants.css'



function RatedRestaurants(){
    let history = useHistory();
    const { currentUser } = useContext(AuthContext);
    let [restaurants, setAllRestaurants] = useState([]);
    const [ errMessage, setErrMessage ] = useState('');
    let [currentRestaurantsToRender, setCurrentRestaurantsToRender] = useState([]);

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
            setAllRestaurants(allRestaurants);
            setCurrentRestaurantsToRender(allRestaurants);
        })
        .catch(err => setErrMessage(err.message))
    }
    }, [])

    function performSearch(event){
        event.preventDefault()
        let filteredResults = restaurants.filter(rest => 
            rest.name.toLowerCase().includes(event.target.search.value.toLowerCase())||
            rest.location.toLowerCase().includes(event.target.search.value.toLowerCase())||
            rest.description.toLowerCase().includes(event.target.search.value.toLowerCase())
        )
        setCurrentRestaurantsToRender(filteredResults)
    }

   // used only after restaurants have been set

    if(currentRestaurantsToRender.length > 0){
        allRatedRestaurants = currentRestaurantsToRender.map(x => <Restaurant 
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
        allRatedRestaurants = <h1 className="no-restaurants">You have made no reviews yet...</h1>
    }


    return(
        <>
        <h1 className="page-heading">My reviews</h1>
        <form onSubmit={performSearch} className="search-form">
            <label htmlFor="search" className="search-label">Search in restaurants</label>
            <input type="search" name="search" className="search-input"></input>
            <input type="submit" value="Find" className='site-button'></input>
        </form>
        <article className="all-rated-restaurants">
                {allRatedRestaurants}
        </article>
        <ErrorMessage>{errMessage}</ErrorMessage>
        </>
    )
}
export default RatedRestaurants;