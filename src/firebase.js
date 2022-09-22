import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCO7yYAqFQL0k2vLDUq-G2uI3VmkWRXxDQ",
  authDomain: "line-clone-4b74d.firebaseapp.com",
  projectId: "line-clone-4b74d",
  storageBucket: "line-clone-4b74d.appspot.com",
  messagingSenderId: "309997399297",
  appId: "1:309997399297:web:91c18f6bca2ea5a64bff00",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
