// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAteFGzuFOnqZEi6KnubDydS4Y5-VEFFHQ",
  authDomain: "notes-2889f.firebaseapp.com",
  projectId: "notes-2889f",
  storageBucket: "notes-2889f.appspot.com",
  messagingSenderId: "91818343889",
  appId: "1:91818343889:web:0c190710ca8098ddaab4f0",
  measurementId: "G-TSYE4LE0N8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authh = getAuth(app)