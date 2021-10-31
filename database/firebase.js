import * as firebase from "firebase/app";
import * as firebaseAuth from "firebase/auth";

// insert api key for firebase here 
const firebaseConfig = {

};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebaseAuth.getAuth(app);
export default auth;