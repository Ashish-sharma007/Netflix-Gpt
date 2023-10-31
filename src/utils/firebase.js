// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTkMJ44F-d2CqCIr_TrOPgw67sJR-1W10",
  authDomain: "netflix-ai-c0a24.firebaseapp.com",
  projectId: "netflix-ai-c0a24",
  storageBucket: "netflix-ai-c0a24.appspot.com",
  messagingSenderId: "608189846175",
  appId: "1:608189846175:web:552d76441ca439a64c88aa",
  measurementId: "G-XXK703R6NB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()