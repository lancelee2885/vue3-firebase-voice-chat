import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCMgU6ZsUoQ9JKffsY1uoS45i1C4qAn-vo",
  authDomain: "vue-firebase-9e087.firebaseapp.com",
  projectId: "vue-firebase-9e087",
  storageBucket: "vue-firebase-9e087.appspot.com",
  messagingSenderId: "90813474890",
  appId: "1:90813474890:web:1e6ea5372a8396f4f25eb3",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();