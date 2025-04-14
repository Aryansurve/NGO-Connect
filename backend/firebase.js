// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtsyzain2wwPHUUu90Q9-wMMMwwjaqO1I",
  authDomain: "ngo-connect-d5fc4.firebaseapp.com",
  projectId: "ngo-connect-d5fc4",
  storageBucket: "ngo-connect-d5fc4.firebasestorage.app",
  messagingSenderId: "347923462962",
  appId: "1:347923462962:web:f9e749006840efd94ab52b",
  measurementId: "G-NCQBQDLBJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);