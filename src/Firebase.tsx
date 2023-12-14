// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu1pu4r4m_kJLEyeL7Jgc6tWz94Upzk98",
  authDomain: "book-review-a7be9.firebaseapp.com",
  projectId: "book-review-a7be9",
  storageBucket: "book-review-a7be9.appspot.com",
  messagingSenderId: "905824431279",
  appId: "1:905824431279:web:f56fdfc06bc60dd733785a",
  measurementId: "G-L9QXD3H138",
};

initializeApp(firebaseConfig);

// Initialize Firebase
export const db = getFirestore();
