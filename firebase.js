// import firebase from '@react-native-firebase/app';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAQt3wC9b3D11kTpYxAQ5tLTSxjRbuTyxE",
  authDomain: "campusconnect-a9fd9.firebaseapp.com",
  projectId: "campusconnect-a9fd9",
  storageBucket: "campusconnect-a9fd9.appspot.com",
  messagingSenderId: "856272800171",
  appId: "1:856272800171:web:d18054d53ef7ecb778eaee",
  measurementId: "G-G9MDK6QHKZ"
};

const app = initializeApp(firebaseConfig);

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export { firebase, auth, firestore };