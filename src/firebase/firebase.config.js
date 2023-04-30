// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsc_n4HH_fLmgxnsH8pwr_6giFhJEiJmo",
  authDomain: "prime-tech-store.firebaseapp.com",
  projectId: "prime-tech-store",
  storageBucket: "prime-tech-store.appspot.com",
  messagingSenderId: "613467951298",
  appId: "1:613467951298:web:e7892037330d01be59ab5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;