import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyAYNHoa3HiV9jujtEPs3SLJf8OJSic8ueA',
    authDomain: 'mhamadharb-a52fc.firebaseapp.com',
    databaseURL: 'mhamadharb-a52fc.firebaseio.com',
    projectId: 'mhamadharb-a52fc',
    storageBucket: 'mhamadharb-a52fc.appspot.com',
    messagingSenderId: '509074248544',
    appId: '1:509074248544:web:ab7bde13aac9185a668405',
    measurmentId: 'eur3',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const imageDb = getStorage(app);
const imgDataDb = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();


export const FacebookAuth = async () => {
    const fbAuth = signInWithPopup(auth, facebookProvider)
    return fbAuth;
}

export const GoogleAuth = async () => {
    const gAuth = signInWithPopup(auth, googleProvider)
    return gAuth;
}

export { auth, imageDb, imgDataDb };
