// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Datatbase realated functions
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAnOPJ4pAMwZlOvbTU3X0Br7DsLy212N4",
  authDomain: "np-clothing.firebaseapp.com",
  projectId: "np-clothing",
  storageBucket: "np-clothing.appspot.com",
  messagingSenderId: "513650864454",
  appId: "1:513650864454:web:545a425f22af7e2fd33547",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// INITATE THE NEW GOOGLE AUTH PROVIDER
const provider = new GoogleAuthProvider();

// PROMPT THE GOOGLE BEFORE SIGNIN TO SELET ACCOUNT
provider.setCustomParameters({
  prompt: "select_account",
});

// GET THE AUTH OBJECT TO TRACK OVER THE SESSION
export const auth = getAuth();

// SIGN UP USING GOOGLE POPUP
export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, provider);

// CREATE AUTH USER FROM EAMIL AND PASSWORD AND SEND RESPONSE OF THAT
export const createAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

// SIGN IN USER WITH EMAIL AND PASSWORD
export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// GET THE DB TO SET, FETCH DATA FROM IT
const db = getFirestore();

// get the user from GIVEN AUTH USER
export const createUserDocFromAuth = async (userAuth, otherUserInfo) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // set the user in userRef if there is not user data in it
  if (!userSnapshot.exists()) {
    try {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...otherUserInfo,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userDocRef;
};

export const signOutUser = async () => {
  return await signOut(auth);
};
