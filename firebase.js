import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCg67vnY1g4qJNpOG0xPiUG8iklhkTE7uQ',
  authDomain: 'whatsapp-rdw.firebaseapp.com',
  projectId: 'whatsapp-rdw',
  storageBucket: 'whatsapp-rdw.appspot.com',
  messagingSenderId: '705717349434',
  appId: '1:705717349434:web:bd2ea1805d796ec131d903',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};
