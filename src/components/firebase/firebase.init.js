// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKlAKrC5up-sbJOPHzk2iJ-DEtV7ou_HQ",
    authDomain: "coffee-store-auth-b159d.firebaseapp.com",
    projectId: "coffee-store-auth-b159d",
    storageBucket: "coffee-store-auth-b159d.firebasestorage.app",
    messagingSenderId: "157013342335",
    appId: "1:157013342335:web:2b16342d3e4a8384f1e74a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
