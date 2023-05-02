// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfy04k4Z_abW2dr4S26zt0e9Z_juJPE0k",
  authDomain: "recipe-bangladesh.firebaseapp.com",
  projectId: "recipe-bangladesh",
  storageBucket: "recipe-bangladesh.appspot.com",
  messagingSenderId: "697217814847",
  appId: "1:697217814847:web:e16af6eba52b16b25fc38a",
  measurementId: "G-PHJ6Q3ZBVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;