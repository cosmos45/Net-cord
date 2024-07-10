import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDVFrSPGXukt7roMzWZ3ZdkLz_lzNJIl6I",
  authDomain: "flixdisc-64c43.firebaseapp.com",
  projectId: "flixdisc-64c43",
  storageBucket: "flixdisc-64c43.appspot.com",
  messagingSenderId: "696041000000",
  appId: "1:696041000000:web:18ac5d59588a05b558a3a5",
  measurementId: "G-SH803NM35S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
