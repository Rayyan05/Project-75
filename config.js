import firebase from 'firebase'

require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBdhT0TG6nLoXBPaJ11NvnPcjJwTVZfdkc",
  authDomain: "project-73-d6599.firebaseapp.com",
  projectId: "project-73-d6599",
  storageBucket: "project-73-d6599.appspot.com",
  messagingSenderId: "489430698379",
  appId: "1:489430698379:web:b4ed793ad06eb0f553478e"
};

firebase.initializeApp(firebaseConfig)

export default firebase.firestore();

