// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN4pgActG7wLfjg7pEHnALe9L-HBg7XwE",
  authDomain: "ema-john-with-firebase-a-d2b90.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-d2b90",
  storageBucket: "ema-john-with-firebase-a-d2b90.appspot.com",
  messagingSenderId: "221578878609",
  appId: "1:221578878609:web:bde4af3f72e883c7f4e930"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;