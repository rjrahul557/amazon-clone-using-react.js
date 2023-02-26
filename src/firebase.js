
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDRZENMWAi7Ushw1AGrG6_BcKizJHyflp0",
    authDomain: "clone-493ed.firebaseapp.com",
    projectId: "clone-493ed",
    storageBucket: "clone-493ed.appspot.com",
    messagingSenderId: "735076640168",
    appId: "1:735076640168:web:d87d96b57f8fde6657a99d",
    measurementId: "G-FNC00H3EXF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};