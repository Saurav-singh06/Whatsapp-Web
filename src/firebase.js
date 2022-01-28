import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNIWCqCQyFvYCsHLtjKyZblt0tHyq2IJ8",
    authDomain: "whatapp-reactjs.firebaseapp.com",
    databaseURL: 'https://whatapp-reactjs-default-rtdb.firebaseio.com/',
    projectId: "whatapp-reactjs",
    storageBucket: "whatapp-reactjs.appspot.com",
    messagingSenderId: "347114601106",
    appId: "1:347114601106:web:0dbc3c25ddcce73de9844b",
    measurementId: "G-T2YY3QC4WY"
  };
  // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth};
export default db;