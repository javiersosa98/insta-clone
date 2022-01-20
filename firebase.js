import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAGCsmOcE5z5tPrVfreF50OnD7S7mm9lsY",
    authDomain: "instagram-clone-1401.firebaseapp.com",
    projectId: "instagram-clone-1401",
    storageBucket: "instagram-clone-1401.appspot.com",
    messagingSenderId: "654634216838",
    appId: "1:654634216838:web:bc310bb0b601acc8b85007",
    measurementId: "G-5LJ9VN31M9"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebase