# jchat 💬

suepr simple chat in firebase hosting

## Pasos para inicializar el repo ✅

    npm install
    npm install -g firebase-tools
    firebase login
    firebase init
    npm install firebase

## Deploy 🚀

    firebase deploy

## Check endpoint 🌎

    https://jchat-a2c5b.web.app/

---

# Please ignore the following: 👇

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKJUVX9qzBBXjdC8ZGVBMY0LprRgeg7dk",
  authDomain: "jchat-a2c5b.firebaseapp.com",
  projectId: "jchat-a2c5b",
  storageBucket: "jchat-a2c5b.appspot.com",
  messagingSenderId: "507020089072",
  appId: "1:507020089072:web:04074712cd832a2029d435",
  measurementId: "G-XNN88DZYGQ"
};

## Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
