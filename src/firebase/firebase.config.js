// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDMwmTz-38xx5fCgtXWmyoY4kxqqK9OuUg",
   authDomain: "the-news-dragon-client-a29b7.firebaseapp.com",
   projectId: "the-news-dragon-client-a29b7",
   storageBucket: "the-news-dragon-client-a29b7.appspot.com",
   messagingSenderId: "842799112075",
   appId: "1:842799112075:web:c34cd91ac00c32b4f1998e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; 