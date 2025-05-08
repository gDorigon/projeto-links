
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFIYeW9lAL6_I7eEHQ3t12K0sxxAl5J8Q",
    authDomain: "reactlinks-e4f17.firebaseapp.com",
    projectId: "reactlinks-e4f17",
    storageBucket: "reactlinks-e4f17.firebasestorage.app",
    messagingSenderId: "878822062922",
    appId: "1:878822062922:web:f3def7d61759b966d59fb3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db };