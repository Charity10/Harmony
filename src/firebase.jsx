import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmUASh9lzkg3qIE3dB-vcuKnBLc5Zu5x4",
  authDomain: "harmony-9ba84.firebaseapp.com",
  projectId: "harmony-9ba84",
  storageBucket: "harmony-9ba84.appspot.com",
  messagingSenderId: "33926554108",
  appId: "1:33926554108:web:92b2cdb5e1207e653c5279"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db=getFirestore(app);
export const storage=getStorage(app);

export default app; 
