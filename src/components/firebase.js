import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

  var firebaseConfig = {
    apiKey: "AIzaSyDPgzk3KzhaxfTfq8-yqmJnQ4uB8GnrD24",
    authDomain: "react-slack-88268.firebaseapp.com",
    databaseURL: "https://react-slack-88268.firebaseio.com",
    projectId: "react-slack-88268",
    storageBucket: "react-slack-88268.appspot.com",
    messagingSenderId: "491014351212",
    appId: "1:491014351212:web:c127bf8a2774a29d97eb49",
    measurementId: "G-DX3YGQLPME"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;
