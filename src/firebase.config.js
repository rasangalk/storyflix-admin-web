// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage, getStore } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2GoJLyKpLIz-YbIEwNHA0qUXi8mpYuAA",
  authDomain: "prototype-storyflix.firebaseapp.com",
  projectId: "prototype-storyflix",
  storageBucket: "prototype-storyflix.appspot.com",
  messagingSenderId: "749202314380",
  appId: "1:749202314380:web:41b1dfa244d574272cd7a9",
  measurementId: "G-WFB93V3RSS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore();
