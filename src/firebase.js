import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWTlRMKc1nDx7BnDBB-hoXWafXzKNEXI8",
  authDomain: "linkedin-clone-1ef65.firebaseapp.com",
  projectId: "linkedin-clone-1ef65",
  storageBucket: "linkedin-clone-1ef65.appspot.com",
  messagingSenderId: "712081327836",
  appId: "1:712081327836:web:82885a1c45fa543dffd619",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, storage, provider };
export default db;
