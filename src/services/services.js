import db from '../firebase/firebase.config';

export function getOneRestaurant(id){
   return db.collection('restaurants').doc(id).get()
}
// export function likeRestaurant(id, current){
//     db.collection('restaurants')
//         .doc(id)
//         .update({ratedBy: current.state.ratedBy + 1})
// }