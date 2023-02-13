import firebase from 'firebase/compat/app';
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAkUl0uTnvJHyWrlaE8xnEQHTEwb4aoVlY",
    authDomain: "react-5a38a.firebaseapp.com",
    projectId: "react-5a38a",
    storageBucket: "react-5a38a.appspot.com",
    messagingSenderId: "866343906198",
    appId: "1:866343906198:web:230b6630f05158cd7d0bb7"
};

firebase.initializeApp(firebaseConfig);

export default firebase;