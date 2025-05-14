// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById("signup-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const firstName = document.getElementById("signup-firstname").value;
    const lastName = document.getElementById("signup-lastname").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Save user info to Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        createdAt: new Date()
      });
  
      alert("Account created and data saved!");
    } catch (error) {
      alert("Error signing up: " + error.message);
    }
  });

  document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert("Signed in as " + userCredential.user.email);
      // You can redirect to another page or load personalized data here
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  });
  
  
