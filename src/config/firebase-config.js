import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAwGbReOcqVIRIvC79STF-SbCUaXxkESSU",
    authDomain: "react-messaging-70a59.firebaseapp.com",
    projectId: "react-messaging-70a59",
    storageBucket: "react-messaging-70a59.appspot.com",
    messagingSenderId: "576042889510",
    appId: "1:576042889510:web:cad86210a60d4b6f9091e7",
    measurementId: "G-NBRL8FNWSZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;