import { getApp,getApps,initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDFU-5V6nkQdsRvyKRHxSrxUIQD05OonIE",
    authDomain: "hamzagpt-e1408.firebaseapp.com",
    projectId: "hamzagpt-e1408",
    storageBucket: "hamzagpt-e1408.appspot.com",
    messagingSenderId: "3380168774",
    appId: "1:3380168774:web:eac188e6b30427e1bba247",
    measurementId: "G-2N8KJ3RZHE"
};

// Intialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db};