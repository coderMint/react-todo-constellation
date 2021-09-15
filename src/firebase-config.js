import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// need to stick to order of init firbase app first, then do everything else
const firebaseApp = initializeApp({
    apiKey: "AIzaSyD8MeKkridDj3xKufXgZV4z6Y_Y_U9t5ic",
    authDomain: "react-todo-constellation.firebaseapp.com",
    projectId: "react-todo-constellation",
    storageBucket: "react-todo-constellation.appspot.com",
    messagingSenderId: "777941213426",
    appId: "1:777941213426:web:59526192889a14aa68f06b"
});

const db = getFirestore(firebaseApp);

export default db;