import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getAuth, signInAnonymously } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyC6BtuPC9mLDkXeEF6E_FUlSb2L6iG2lS4",
    authDomain: "wecreationofficial2021.firebaseapp.com",
    databaseURL: "https://wecreationofficial2021-default-rtdb.firebaseio.com",
    projectId: "wecreationofficial2021",
    storageBucket: "wecreationofficial2021.appspot.com",
    messagingSenderId: "1037471149486",
    appId: "1:1037471149486:web:e782402e35c0414b666c3f",
    measurementId: "G-Z5V8YH9411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const auth = getAuth();
