// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRSEBASE_APIKEY,
  authDomain: "visual-bbe2e.firebaseapp.com",
  projectId: "visual-bbe2e",
  storageBucket: "visual-bbe2e.appspot.com",
  messagingSenderId: "61490667244",
  appId: "1:61490667244:web:af1852cbe2b77fb61d8fc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();