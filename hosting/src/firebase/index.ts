import firebase, { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC8WDOfI5HTJwx0xeXa3sIWK0Q2nKkJO5A",
  authDomain: "mchord-tomato.firebaseapp.com",
  databaseURL:
    "https://mchord-tomato-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mchord-tomato",
  storageBucket: "mchord-tomato.appspot.com",
  messagingSenderId: "129189076625",
  appId: "1:129189076625:web:8078dfce3f86ae64336930",
  measurementId: "G-5KWLS7NB54",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export { db };
