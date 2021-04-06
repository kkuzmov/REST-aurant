import { db } from '../firebase/firebase.config';
import firebase from 'firebase';
// is it neccessary?
import "firebase/auth"

export function getOneRestaurant(id){
   return db.collection('restaurants').doc(id).get()
}
export function registerUser(email, password){
   return firebase.auth().createUserWithEmailAndPassword(email, password) 
}
export function loginUser(email, password){
   return firebase.auth().signInWithEmailAndPassword(email, password) 
}
export function logoutUser(){
   return firebase.auth().signOut() 
}
export function getAllRestaurants(){
   return db.collection('restaurants').get()
}