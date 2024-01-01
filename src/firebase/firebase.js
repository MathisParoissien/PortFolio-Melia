import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBheEleONUowZvuD6lk3uuwwg3Rq_4dqE4",
    authDomain: "mearly-429a6.firebaseapp.com",
    projectId: "mearly-429a6",
    storageBucket: "mearly-429a6.appspot.com",
    messagingSenderId: "965569186705",
    appId: "1:965569186705:web:29276cae0def291ed1a830",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);