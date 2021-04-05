import { useContext } from 'react';
import { AuthContext } from '../../components/Auth/Auth';
import { Redirect, useHistory } from 'react-router-dom';


export function CheckIfUserIsLoggedIn(user){
    let history = useHistory();

    if(!user){
        console.log('no user')
        return history.push('/login');
    }else{
        console.log('user is logged')
    }
}
