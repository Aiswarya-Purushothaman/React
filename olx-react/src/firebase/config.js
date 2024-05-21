// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCTryVM6KJTYl_J4vA_EK_TUTHFgFyPDoA",
//   authDomain: "fir-48929.firebaseapp.com",
//   projectId: "fir-48929",
//   storageBucket: "fir-48929.appspot.com",
//   messagingSenderId: "1070862490117",
//   appId: "1:1070862490117:web:2fe322f92b17bda0df9a6c",
//   measurementId: "G-JCXD9P4CQ4"
// };

// const app = initializeApp(firebaseConfig);
// export const firebase = getAuth(app);
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCTryVM6KJTYl_J4vA_EK_TUTHFgFyPDoA",
  authDomain: "fir-48929.firebaseapp.com",
  projectId: "fir-48929",
  storageBucket: "fir-48929.appspot.com",
  messagingSenderId: "1070862490117",
  appId: "1:1070862490117:web:2fe322f92b17bda0df9a6c",
  measurementId: "G-JCXD9P4CQ4"
};
export default firebase.initializeApp(firebaseConfig);
