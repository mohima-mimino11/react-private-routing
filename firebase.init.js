// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3btRnZwWtnjJNBXYsh87C0mmkbrFXCQM",
  authDomain: "react-private-routing.firebaseapp.com",
  projectId: "react-private-routing",
  storageBucket: "react-private-routing.firebasestorage.app",
  messagingSenderId: "878197371378",
  appId: "1:878197371378:web:17b0a95b1308ca86c83b6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);