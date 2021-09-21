import firebase from 'firebase/app';
import 'firebase/auth';
import { createFirestoreInstance } from 'redux-firestore';
import { store } from 'store';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'games-deals.firebaseapp.com',
  projectId: 'games-deals',
  storageBucket: 'games-deals.appspot.com',
  messagingSenderId: '981375237692',
  appId: '1:981375237692:web:6b8894b7742a2624e78d39',
};
firebase.initializeApp(firebaseConfig);
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
