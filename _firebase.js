// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmC2ur9JG8zz5nahRIAs9c6Oofah9nf4M",
  authDomain: "absolutions-ad0ff.firebaseapp.com",
  projectId: "absolutions-ad0ff",
  storageBucket: "absolutions-ad0ff.appspot.com",
  messagingSenderId: "25471662156",
  appId: "1:25471662156:web:b6a4cdf12fe5e4375e5ce9",
  measurementId: "G-HFRZBJRTSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);