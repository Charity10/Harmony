// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAwvwK-GRbXUyYD-ZkUmistDr7SmXiW-8",
  authDomain: "harmony-c267d.firebaseapp.com",
  projectId: "harmony-c267d",
  storageBucket: "harmony-c267d.appspot.com",
  messagingSenderId: "1071543151245",
  appId: "1:1071543151245:web:f6c9abb2a69cac217010c4",
  measurementId: "G-B6H215ZK2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;