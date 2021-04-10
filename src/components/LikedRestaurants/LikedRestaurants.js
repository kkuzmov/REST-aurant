import { useContext, useEffect, useState } from 'react';
import { db } from '../../firebase/firebase.config';
import { AuthContext } from '../Auth/Auth';
import Restaurant from '../Restaurant/Restaurant';
import {  useHistory } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';



function LikedRestaurants(){
    let history = useHistory();
    const [ errMessage, setErrMessage ] = useState('');
    const { currentUser } = useContext(AuthContext);
    let [restaurants, setAllRestaurants] = useState([]);
    let [currentRestaurantsToRender, setCurrentRestaurantsToRender] = useState([]);
    let allLikedRestaurants;
    
    useEffect(()=>{
        if(currentUser == null){
            history.push('/login')
        }else{
        db.collection('restaurants')
            .where('likedBy', 'array-contains', currentUser.uid)
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
        allLikedRestaurants = currentRestaurantsToRender.map(x => <Restaurant 
            key={x.id}
            imageUrl={x.imageUrl}
            name={x.name}
            description={x.description}
            location={x.location}
            rating={x.rating}
            category={x.category}
            id={x.id}/>
        )
    }else{
        allLikedRestaurants = <h1>You didn't like a single review yet...</h1>
    }
    

    return(
        <>
        <h1 className="page-heading">Restaurants liked</h1>
        <form onSubmit={performSearch}>
        <label htmlFor="search">Search here</label>
        <input type="search" name="search"></input>
        <input type="submit" value="Search" className='site-button'></input>
        </form>
        <article className="all-rated-restaurants">
                {allLikedRestaurants}
        </article>
        <ErrorMessage>{errMessage}</ErrorMessage>
        </>
    )
}
export default LikedRestaurants;