// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLkMtsDHUpctwY2POiAGX9M7XG3GtFvro",
  authDomain: "emaile-and-password-fast-test.firebaseapp.com",
  projectId: "emaile-and-password-fast-test",
  storageBucket: "emaile-and-password-fast-test.appspot.com",
  messagingSenderId: "6685436620",
  appId: "1:6685436620:web:27e7b11bc90d4faa697069"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;