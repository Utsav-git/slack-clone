// import { firebase } from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_i35VB2rM8T9yNngpx5vupJIbJqPlmCY",
  authDomain: "slack-clone-19653.firebaseapp.com",
  projectId: "slack-clone-19653",
  storageBucket: "slack-clone-19653.appspot.com",
  messagingSenderId: "582532689184",
  appId: "1:582532689184:web:1b4726a8a63b655d7bbb45",
  measurementId: "G-FEC4PTB7NW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
