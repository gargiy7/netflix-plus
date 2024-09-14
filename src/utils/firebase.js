// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADzactIqb2stR9u5Sl7gau2orUXpzYsuc",
  authDomain: "netflix-plus-8beb6.firebaseapp.com",
  projectId: "netflix-plus-8beb6",
  storageBucket: "netflix-plus-8beb6.appspot.com",
  messagingSenderId: "1083487674658",
  appId: "1:1083487674658:web:ba1fd464acc874d377457b",
  measurementId: "G-1049PDVG48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const auth = getAuth()