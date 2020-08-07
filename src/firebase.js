import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCNvcH0c9fe2p-yTvonsID4_Sssk80a9oM",
    authDomain: "covid-19-5f03d.firebaseapp.com",
    databaseURL: "https://covid-19-5f03d.firebaseio.com",
    projectId: "covid-19-5f03d",
    storageBucket: "covid-19-5f03d.appspot.com",
    messagingSenderId: "487713867068",
    appId: "1:487713867068:web:26ac676cb0ad7673ef0a39",
    measurementId: "G-FRGCSDWTSZ"
});

 const db = firebaseApp.firestore();

export default db;