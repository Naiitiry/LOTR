// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXn6foAFy14zalggKM7c1ODheOCeFgb2Q",
    authDomain: "restaurant-react-b381f.firebaseapp.com",
    projectId: "restaurant-react-b381f",
    storageBucket: "restaurant-react-b381f.appspot.com",
    messagingSenderId: "800738196663",
    appId: "1:800738196663:web:a722d78d61e6edf0d62132"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
