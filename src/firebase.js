import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBzZ2JXAL-F0BDN3uafPkKV5s-c9JxA5uM",
  authDomain: "discord-clone-7411f.firebaseapp.com",
  databaseURL: "https://discord-clone-7411f.firebaseio.com",
  projectId: "discord-clone-7411f",
  storageBucket: "discord-clone-7411f.appspot.com",
  messagingSenderId: "485472660269",
  appId: "1:485472660269:web:700b2af2dc284f34b681a4",
  measurementId: "G-9BP6SJB558",
};


const firebaseApp =firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;