import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOIIDGGcxqsopSsZzp-li4pPdo9K6X9EE",
  authDomain: "pelix-land.firebaseapp.com",
  projectId: "pelix-land",
  storageBucket: "pelix-land.appspot.com",
  messagingSenderId: "122840409920",
  appId: "1:122840409920:web:14e9cf8afb26d4472f7ca5"
};

firebase.initializeApp(firebaseConfig);

export const fb = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();