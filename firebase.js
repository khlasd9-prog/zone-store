// استيراد Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCR4gOU76rfZni_a4beAplwht_TQeByrFs",
  authDomain: "zone-store-5.firebaseapp.com",
  projectId: "zone-store-5",
  storageBucket: "zone-store-5.firebasestorage.app",
  messagingSenderId: "1074472472670",
  appId: "1:1074472472670:web:087c291d21c09c72b2a4cf",
  measurementId: "G-6E0S9JY76C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };