import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3yi8zC1bpx9WGnQtIxtmH_HWvBJsqHJY",
  authDomain: "my-academic-planner-91526.firebaseapp.com",
  projectId: "my-academic-planner-91526",
  storageBucket: "my-academic-planner-91526.firebasestorage.app",
  messagingSenderId: "212759027745",
  appId: "1:212759027745:web:26f6e1b0d7f26054f74360"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);