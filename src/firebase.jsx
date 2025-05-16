// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApouO2Gy4InLgTeDXYy7chrcT8mMoJ7EE",
  authDomain: "portfolio-155d9.firebaseapp.com",
  projectId: "portfolio-155d9",
  storageBucket: "portfolio-155d9.appspot.com",
  messagingSenderId: "935784806643",
  appId: "1:935784806643:web:7705ba092e2a3c96a21f86",
  measurementId: "G-DTBDP7W964",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
