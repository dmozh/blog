import firebase from '../node_modules/firebase/app'
import "firebase/firestore"
// import '../node_modules/xmlhttprequest/'
// import {XMLHttpRequest} from "xmlhttprequest";
// import {child_process} from "child_process";

// global.XMLHttpRequest = XMLHttpRequest;
// // global.child_process = child_process;

let firebaseConfig = {
    apiKey: "AIzaSyD8Y6vGs4CgUdCs3MXJDHlkiq0V1heAH8E",
    authDomain: "blog-b6cc7.firebaseapp.com",
    databaseURL: "https://blog-b6cc7.firebaseio.com",
    projectId: "blog-b6cc7",
    storageBucket: "blog-b6cc7.appspot.com",
    messagingSenderId: "805328309201",
    appId: "1:805328309201:web:b1ea1c3bc6a018ea042ef0",
    measurementId: "G-757MVE699K"
};
export let app = firebase.initializeApp(firebaseConfig);

export let db = app.firestore();
