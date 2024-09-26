// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config object from the Firebase Console
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: "animated-origin-435405-r8.firebaseapp.com",
    projectId: "animated-origin-435405-r8",
    storageBucket: "animated-origin-435405-r8.appspot.com",
    messagingSenderId: "920911821582",
    appId: "1:920911821582:web:89aa806a863d1bba7cb55f",
    measurementId: "G-8R3NNWNBEN"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
