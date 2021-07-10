import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyADVy6HV7JpkTewzKgHMZZKgogqNUKEOG8",
    authDomain: "docs-clone-eea3e.firebaseapp.com",
    projectId: "docs-clone-eea3e",
    storageBucket: "docs-clone-eea3e.appspot.com",
    messagingSenderId: "334040442853",
    appId: "1:334040442853:web:d1ad04744eb878443b710c"
  };

  const  app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


  const db = app.firestore();

  export { db };