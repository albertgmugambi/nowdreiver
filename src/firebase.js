// firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyArdGg6zHQZ-LKui7E51zf_rXbLuPXX8NY",
    authDomain: "listdrivers.firebaseapp.com",
    databaseURL: "https://listdrivers-default-rtdb.firebaseio.com",
    projectId: "listdrivers",
    storageBucket: "listdrivers.appspot.com",
    messagingSenderId: "176295583188",
    appId: "1:176295583188:web:7861ea037edefbfa3eca41",
    measurementId: "G-KM3NZTY374"
  // Add more configuration properties here if needed
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

