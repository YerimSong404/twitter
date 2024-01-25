import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAfduQokuY2bipHu7MBxaWEz1KzbUysUVQ",
    authDomain: "twitter-b3894.firebaseapp.com",
    projectId: "twitter-b3894",
    storageBucket: "twitter-b3894.appspot.com",
    messagingSenderId: "419221199908",
    appId: "1:419221199908:web:d5c8ca4c82f744dd030cb1"
};

export default firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();