import firebase from 'firebase';
import '@firebase/firestore';
// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyBV8ltqYIyU7weTGntDT9lmvcqgegjr8Ok",
    authDomain: "booksanta-a4279.firebaseapp.com",
    databaseURL: "https://booksanta-a4279.firebaseio.com",
    projectId: "booksanta-a4279",
    storageBucket: "booksanta-a4279.appspot.com",
    messagingSenderId: "412627862057",
    appId: "1:412627862057:web:b1544bd05cab136348d238"
  };
// Initialize Firebase

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    
}

//export default  firebase.database()
var db = firebase.firestore();
export default db;