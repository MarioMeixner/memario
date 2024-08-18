// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa-PdXfWVYmN5f7-fiv6CS95K01MzepnY",
  authDomain: "memario-c5adf.firebaseapp.com",
  projectId: "memario-c5adf",
  storageBucket: "memario-c5adf.appspot.com",
  messagingSenderId: "798600897556",
  appId: "1:798600897556:web:6bfa2781f4a4df4193b301",
  measurementId: "G-24M8N8SZ7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);