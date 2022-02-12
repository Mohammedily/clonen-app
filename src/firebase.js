// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX5HakBjObctnDDb7Q_Eo10dWjx2E1Aik",
  authDomain: "stackoverflow-5b25d.firebaseapp.com",
  projectId: "stackoverflow-5b25d",
  storageBucket: "stackoverflow-5b25d.appspot.com",
  messagingSenderId: "414008791368",
  appId: "1:414008791368:web:ee5de0b7e4131afe67637d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
