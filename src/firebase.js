import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDShVVPstEzn77B-X08-Bz_fy3BuOfJVlE",
    authDomain: "linkedin-clone-d36cb.firebaseapp.com",
    projectId: "linkedin-clone-d36cb",
    storageBucket: "linkedin-clone-d36cb.appspot.com",
    messagingSenderId: "1008401692560",
    appId: "1:1008401692560:web:6137b117ef83201a99a515"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  

  export { db, auth };