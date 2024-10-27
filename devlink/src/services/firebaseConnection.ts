import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDtOFvKHC1tx_PTkuLLjW-oZ1xlzv34Q20",
  authDomain: "reactlinks-cb19f.firebaseapp.com",
  projectId: "reactlinks-cb19f",
  storageBucket: "reactlinks-cb19f.appspot.com",
  messagingSenderId: "960443502823",
  appId: "1:960443502823:web:04366fe091c7875f901242"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };