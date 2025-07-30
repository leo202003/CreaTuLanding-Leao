import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYe-tFGaO_0NT8M8g6K037v5Y0qcaqrhU",
  authDomain: "proyecto-react-coder-823b8.firebaseapp.com",
  projectId: "proyecto-react-coder-823b8",
  storageBucket: "proyecto-react-coder-823b8.firebasestorage.app",
  messagingSenderId: "83817070843",
  appId: "1:83817070843:web:540c25c97cbaa0b3ec305e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
