import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAYnzuKqsJl_2y2EJE9fMiKlZhqdwtue7E",
    authDomain: "rest-aurant-71507.firebaseapp.com",
    projectId: "rest-aurant-71507",
    storageBucket: "rest-aurant-71507.appspot.com",
    messagingSenderId: "901461881317",
    appId: "1:901461881317:web:886d704a3725a3657e7f0c"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const storage = firebase.storage();
  const storageRef = storage.ref();
  export {
    db,
    firebaseApp,
    storageRef
  }