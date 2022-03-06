import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAo-0H0v2rkk9BYZwZygjaCx6YckEcgC8Y",
    authDomain: "hbo-max-clone.firebaseapp.com",
    projectId: "hbo-max-clone",
    storageBucket: "hbo-max-clone.appspot.com",
    messagingSenderId: "983553047374",
    appId: "1:983553047374:web:2d3011da371ff33d043c1f",
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
