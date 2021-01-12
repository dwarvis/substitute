import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8Rv0fpVYm7SCHkYjAUfAe0vQWSMM54EE",
  authDomain: "substitute-bbcdc.firebaseapp.com",
  projectId: "substitute-bbcdc",
  storageBucket: "substitute-bbcdc.appspot.com",
  messagingSenderId: "500723461573",
  appId: "1:500723461573:web:94c36e1c939911e0c82fac",
};

const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();
var database = fire.database();
var firestore = fire.firestore();

export default fire;
export { auth, database, firestore };
