import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBZ5_2GxBQOU-h1OsUN-nBqCzkfbGs8yv0",
  authDomain: "cart-4dbbe.firebaseapp.com",
  projectId: "cart-4dbbe",
  storageBucket: "cart-4dbbe.appspot.com",
  messagingSenderId: "1087400002587",
  appId: "1:1087400002587:web:8a48b6ac5d8143e53924be"
};

// Initialize Firebas
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()
console.log(app);
console.log(db);
console.log("Hello Firbase",app);
ReactDOM.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);



