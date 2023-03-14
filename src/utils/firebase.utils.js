import { initializeApp } from 'firebase/app'
// getAuth allows us to get info on authenticated users
import {getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDp6vNjC84Fhg2e1sNy5jgZtxamvURQLB4",

  authDomain: "byte-shop-9b595.firebaseapp.com",

  projectId: "byte-shop-9b595",

  storageBucket: "byte-shop-9b595.appspot.com",

  messagingSenderId: "533342461255",

  appId: "1:533342461255:web:4973f0fcad588ea653c062"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

//we want to access this in multiple files so
// we export it. (allows us to access authenticated
// user info)
export const auth = getAuth(app);

// represents everything related to google authentication
const provider = new GoogleAuthProvider();

// we create a function that allows us to sign in with google

export const signInWithGoogle = async () => {
    // the function alone will show the pop up and allow
    // the user to sign in with their google account. 
    await signInWithPopup(auth, provider)
    // const userDocRef = await createUserDocumentFromAuth(user)
    
}

export const db = getFirestore()

//gets data from auth service and stores it in
// firestore db.
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) =>{
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    
    if (!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password, displayName) => {
    if (!email || !password) return;
    try {
        const {user} = await createUserWithEmailAndPassword(auth, email, password);
        const userDocRef = await createUserDocumentFromAuth(user, {displayName})
        console.log(userDocRef)
        return user;
    }
    catch (error) {
        if (error.code === 'auth/email-already-in-use')
            alert('Email already in use.')
        else if (error.code === 'auth/weak-password')
            alert('Password length should be over 6 letters.', error)
        else
            alert('User creation encountered an error' + error)
        return null;
    }
}

export const signInAuthUserWithEmailAndPassword = async (email, password) =>{
    if (!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
{

    onAuthStateChanged(auth, callback);

}

