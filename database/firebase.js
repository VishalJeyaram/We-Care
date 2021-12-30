import * as firebase from "firebase/app";
import * as firebaseAuth from "firebase/auth";

// insert api key for firebase here 
const firebaseConfig = {
    apiKey: "AIzaSyADsIlrWVfM1zTPzSqGOnQWYRG0zswQezs",
    authDomain: "we-care-3b4db.firebaseapp.com",
    projectId: "we-care-3b4db",
    storageBucket: "we-care-3b4db.appspot.com",
    messagingSenderId: "915859046344",
    appId: "1:915859046344:web:b436b67fd7741c8f9acafd",
    measurementId: "G-TEFJKPPYKE"
};
  

const app = firebase.initializeApp(firebaseConfig);
const auth = firebaseAuth.getAuth(app);
export default auth;