// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, onSnapshot, setDoc } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { Keys } from "../../utils/Keys";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: Keys.APIKEY,
  authDomain: Keys.AUTHDOMAIN,
  projectId: Keys.PROJECTID,
  storageBucket: Keys.STORAGEBUCKET,
  messagingSenderId: Keys.MESSAGINGSENDERID,
  appId: Keys.APPID,
  measurementId: Keys.MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authh = getAuth(app)
export const mydatabase = getFirestore(app)
export const mystorage = getStorage(app);
export const storageRef = ref(mystorage, 'images');


//add doc



