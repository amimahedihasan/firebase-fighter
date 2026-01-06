// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUGEFqhZJS9kCik6pKpNnp2zWDHY36d3M",
  authDomain: "fir-fighter-94d6b.firebaseapp.com",
  projectId: "fir-fighter-94d6b",
  storageBucket: "fir-fighter-94d6b.firebasestorage.app",
  messagingSenderId: "123855918348",
  appId: "1:123855918348:web:1820efdbe53caa06e82529"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
