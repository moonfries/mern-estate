// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f9ad0.firebaseapp.com",
  projectId: "mern-estate-f9ad0",
  storageBucket: "mern-estate-f9ad0.appspot.com",
  messagingSenderId: "919353723137",
  appId: "1:919353723137:web:f4bfd04d20feec3b2d7300"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);