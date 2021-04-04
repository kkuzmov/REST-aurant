import { useContext } from 'react';
import { AuthContext } from '../Auth/Auth';

import HomepageUser from '../HomepageUser/HomepageUser';
import HomepageGuest from '../HomepageGuest/HomepageGuest';


function HomepageContainer(){
    const { currentUser } = useContext(AuthContext);

    if(currentUser){
        return (
            <HomepageUser />
        )
    }else{
        return(
            <HomepageGuest />
        )
    }
    
}
export default HomepageContainer;