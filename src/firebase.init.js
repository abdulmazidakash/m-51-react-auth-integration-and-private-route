// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU0OzAh98syo2aMl7-xYhD6YeTbkfijbk",
  authDomain: "auth-moha-milon-364a3.firebaseapp.com",
  projectId: "auth-moha-milon-364a3",
  storageBucket: "auth-moha-milon-364a3.firebasestorage.app",
  messagingSenderId: "941502456610",
  appId: "1:941502456610:web:5b564d1d7005f36ed9fb7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
