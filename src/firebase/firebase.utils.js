import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAc7Q3WZ2KrAtaJAG6GYsoJ0o4rn5CgDik',
  authDomain: 'crown-db-8d143.firebaseapp.com',
  projectId: 'crown-db-8d143',
  storageBucket: 'crown-db-8d143.appspot.com',
  messagingSenderId: '927059210472',
  appId: '1:927059210472:web:faa48db1e6ee1f2e1c195d',
  measurementId: 'G-LR5ZKW64BN',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
