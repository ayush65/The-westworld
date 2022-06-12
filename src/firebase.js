// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1OvHM1V8e2HekN2nJ2qMfLWLqPJNgNOo",
  authDomain: "the-westworld.firebaseapp.com",
  projectId: "the-westworld",
  storageBucket: "the-westworld.appspot.com",
  messagingSenderId: "542481451168",
  appId: "1:542481451168:web:f87051ff513d1dcaf2a1c5"
};

initializeApp(firebaseConfig);

export  default getFirestore();


