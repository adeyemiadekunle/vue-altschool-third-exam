import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";




// Initialize Firebase app
const firebaseConfig = {
  // your firebase config object here
  apiKey: "AIzaSyA6TqjxSeZ7fnvMZeVE7VHpsZr3u1v0Ac4",
  authDomain: "vue-altschool-third-exam.firebaseapp.com",
  projectId: "vue-altschool-third-exam",
  storageBucket: "vue-altschool-third-exam.appspot.com",
  messagingSenderId: "422327894895",
  appId: "1:422327894895:web:a20ca737d97424e007de9a"
};
const app = initializeApp(firebaseConfig);



// Initialize Firebase services
 const auth = getAuth(app);
 const db = getDatabase(app);




 export {app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, db, ref, set, get }
