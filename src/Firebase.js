// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "api-login-plane.firebaseapp.com",
  projectId: "api-login-plane",
  storageBucket: "api-login-plane.appspot.com",
  messagingSenderId: "285948491613",
  appId: "1:285948491613:web:590c1122639a9d8d595ab4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
