// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMZGaxq1pqTuoiYnvLAYDDveel99z5cyg",
  authDomain: "e-commerce--react-c664b.firebaseapp.com",
  projectId: "e-commerce--react-c664b",
  storageBucket: "e-commerce--react-c664b.appspot.com",
  messagingSenderId: "31804528812",
  appId: "1:31804528812:web:f75cf23eca7657c161a709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)