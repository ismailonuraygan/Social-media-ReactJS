import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdBwkKl6k6OmaMqNkN66sz7xNqPAij8DY",
    authDomain: "social-media-reactjs-14851.firebaseapp.com",
    projectId: "social-media-reactjs-14851",
    storageBucket: "social-media-reactjs-14851.appspot.com",
    messagingSenderId: "1048073024057",
    appId: "1:1048073024057:web:e9c3015597e39ec96ed3e8",
    measurementId: "G-6STHKG30MF"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db