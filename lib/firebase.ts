// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // for authentication
import { getFirestore } from "firebase/firestore"; // for firestore database
import { getStorage } from "firebase/storage"; // for firebase storage

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5W-wVMRAoDLauzc6ns_xMdKyIQ_5G4XM",
  authDomain: "road-helper-60c31.firebaseapp.com",
  projectId: "road-helper-60c31",
  storageBucket: "road-helper-60c31.firebasestorage.app",
  messagingSenderId: "808236899723",
  appId: "1:808236899723:web:ed90fd103a70ba0f4ae38e",
  measurementId: "G-B6KR0NHH9G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Authentication
const auth = getAuth(app);

// Database
const db = getFirestore(app);

export { app, auth, db };
