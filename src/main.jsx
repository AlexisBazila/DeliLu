import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9HOPHs3NgVH_OasEK4924cOI8nBnp88k",
  authDomain: "delilu54075-1.firebaseapp.com",
  projectId: "delilu54075-1",
  storageBucket: "delilu54075-1.appspot.com",
  messagingSenderId: "574491236235",
  appId: "1:574491236235:web:186755b01796cf7fcb018e"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
