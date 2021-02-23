import firebase from 'firebase';

require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyA2GrDdIQv0FsIhm6ThKMkOimzO6CxgYGI",
    authDomain: "bartersystemapp-ce6e4.firebaseapp.com",
    projectId: "bartersystemapp-ce6e4",
    storageBucket: "bartersystemapp-ce6e4.appspot.com",
    messagingSenderId: "153994672258",
    appId: "1:153994672258:web:31edfc1d16fdb056421c9b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();