// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: import.meta.env.VITE_APIKEY,
    // authDomain: import.meta.env.VITE_AUTHDOMAIN,
    // projectId: import.meta.env.VITE_PROJECTID,
    // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    // appId: import.meta.env.VITE_APPID


    apiKey: "AIzaSyA7GQCditQ3HY-IIUxe0gpkfFG1EU6Lzrg",
    authDomain: "event-management-dffbc.firebaseapp.com",
    projectId: "event-management-dffbc",
    storageBucket: "event-management-dffbc.appspot.com",
    messagingSenderId: "817847375814",
    appId: "1:817847375814:web:6c1562461af05d06dd84c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;