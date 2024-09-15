// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPbSJTsv_8__aondhzJuL2WfXlW2ZNGcQ",
  authDomain: "job-hostely.firebaseapp.com",
  projectId: "job-hostely",
  storageBucket: "job-hostely.appspot.com",
  messagingSenderId: "999901821708",
  appId: "1:999901821708:web:44ffa51b4d60f186a0a729"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;