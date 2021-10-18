import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3Toq7DOllTPmscqvIdPib5yWrLI6QioU",
  authDomain: "social2-5b18d.firebaseapp.com",
  projectId: "social2-5b18d",
  storageBucket: "social2-5b18d.appspot.com",
  messagingSenderId: "1010829125086",
  appId: "1:1010829125086:web:ed2d2d6a9ea9f8ecdde94f",
  measurementId: "G-YLV4S9BDF4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db

/* import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3Toq7DOllTPmscqvIdPib5yWrLI6QioU",
  authDomain: "social2-5b18d.firebaseapp.com",
  projectId: "social2-5b18d",
  storageBucket: "social2-5b18d.appspot.com",
  messagingSenderId: "1010829125086",
  appId: "1:1010829125086:web:ed2d2d6a9ea9f8ecdde94f",
  measurementId: "G-YLV4S9BDF4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db; */