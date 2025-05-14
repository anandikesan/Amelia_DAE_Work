

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.x.x/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.x.x/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to load data from a collection
window.loadData = async function () {
  const querySnapshot = await getDocs(collection(db, "myCollection"));
  const output = document.getElementById("output");
  output.innerHTML = ""; // clear existing items
  querySnapshot.forEach((doc) => {
    const li = document.createElement("li");
    li.textContent = `${doc.id}: ${JSON.stringify(doc.data())}`;
    output.appendChild(li);
  });
};
