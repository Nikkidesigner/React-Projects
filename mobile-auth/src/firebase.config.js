// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "mobile-2d4aa.firebaseapp.com",
  projectId: "mobile-2d4aa",
  storageBucket: "mobile-2d4aa.firebasestorage.app",
  messagingSenderId: "982975176302",
  appId: "",
  measurementId: "G-44KW2GZNPF"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
