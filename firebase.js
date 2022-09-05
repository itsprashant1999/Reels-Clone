// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrEQaisFv_P9thzZf5F7pv0GWiPzfBeuI",
  authDomain: "insta-reels-ae98b.firebaseapp.com",
  projectId: "insta-reels-ae98b",
  storageBucket: "insta-reels-ae98b.appspot.com",
  messagingSenderId: "1013279045663",
  appId: "1:1013279045663:web:f2b8f846f68bf35e1a7d2a",
  measurementId: "G-6YG39KQML8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);