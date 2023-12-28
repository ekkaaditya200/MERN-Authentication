// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-authentication-ffc18.firebaseapp.com",
  projectId: "mern-authentication-ffc18",
  storageBucket: "mern-authentication-ffc18.appspot.com",
  messagingSenderId: "971680948026",
  appId: "1:971680948026:web:fdc22abc340dd1cfb0fa03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;