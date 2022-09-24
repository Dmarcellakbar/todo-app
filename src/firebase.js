import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAOh6wMYQqs36zMtFmjQpx8f86uZCLwhgw",
    authDomain: "todolist-724cb.firebaseapp.com",
    projectId: "todolist-724cb",
    storageBucket: "todolist-724cb.appspot.com",
    messagingSenderId: "487987109498",
    appId: "1:487987109498:web:e0606dc4588e102e2ae5c3",
    measurementId: "G-JZNXEN56HW"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db } 