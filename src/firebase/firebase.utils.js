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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
