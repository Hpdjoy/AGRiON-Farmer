import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getDatabase } from "firebase/database"; // Import Firebase Realtime Database

const { VITE_FIREBASE_API_KEY } = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: "smartfarming-b9715.firebaseapp.com",
  databaseURL: "https://smartfarming-b9715-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smartfarming-b9715",
  storageBucket: "smartfarming-b9715.appspot.com", // Fixed storage bucket URL
  messagingSenderId: "971173108618",
  appId: "1:971173108618:web:6834565da03fdaa841c673"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const rdb = getDatabase(app);
const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider(); // Added Google Auth Provider

export { db, rdb, auth, googleAuthProvider };
