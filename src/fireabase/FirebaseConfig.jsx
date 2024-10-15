// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmz3VwayFkM8PHAFlBQe8XK8XoJQSNoYc",
  authDomain: "e-commerce-27840.firebaseapp.com",
  projectId: "e-commerce-27840",
  storageBucket: "e-commerce-27840.appspot.com",
  messagingSenderId: "79829629067",
  appId: "1:79829629067:web:c145b139b2353b5d13bc8e",
  measurementId: "G-LT82SRRY2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}