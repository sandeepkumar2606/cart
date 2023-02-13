import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA1BhdRp_LHrC8B5IUndUkbA7SBQxd3bxg",
  authDomain: "cart-d912b.firebaseapp.com",
  projectId: "cart-d912b",
  storageBucket: "cart-d912b.appspot.com",
  messagingSenderId: "797624946391",
  appId: "1:797624946391:web:6b8689df245313ffed6a92"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
