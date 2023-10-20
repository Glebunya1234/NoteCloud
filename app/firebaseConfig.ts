// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { get } from "http";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ32NSaQMb8cpyHmJR27jX3X8DZ2YgaKE",
  authDomain: "notecloud-4cea9.firebaseapp.com",
  projectId: "notecloud-4cea9",
  storageBucket: "notecloud-4cea9.appspot.com",
  messagingSenderId: "391946937941",
  appId: "1:391946937941:web:9dae7431386045835b56dc",
  measurementId: "G-3NGG3JKPC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 
export const authh = getAuth(app)