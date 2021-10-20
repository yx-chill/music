import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBt6i9MCpGA0rhX7Q-LBqN_1Pq0DfLvKb4',
  authDomain: 'music-e6823.firebaseapp.com',
  projectId: 'music-e6823',
  storageBucket: 'music-e6823.appspot.com',
  messagingSenderId: '281008066183',
  appId: '1:281008066183:web:6b7d77d48d255c864d3222',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
