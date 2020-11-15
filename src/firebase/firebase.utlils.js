import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCtB4Ua7WIo9VisN7KomhqQNa6qveaOsHA",
  authDomain: "crwn-db-1929f.firebaseapp.com",
  databaseURL: "https://crwn-db-1929f.firebaseio.com",
  projectId: "crwn-db-1929f",
  storageBucket: "crwn-db-1929f.appspot.com",
  messagingSenderId: "870351737544",
  appId: "1:870351737544:web:2126496849bf08e26e4bfd",
  measurementId: "G-Q0GS2KP49P",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
