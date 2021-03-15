import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCaoH_qq89DDh0Rqq9Xps-CXU05W1exom0",
    authDomain: "slack-clone-46d3e.firebaseapp.com",
    projectId: "slack-clone-46d3e",
    storageBucket: "slack-clone-46d3e.appspot.com",
    messagingSenderId: "572491750896",
    appId: "1:572491750896:web:e03d05ef52ba0392305135",
    measurementId: "G-08N973PFQN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider, db};