import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyC4rGJiOU881dZfYiBzvRvyIgoe_FiMqgU",
  authDomain: "plantits.firebaseapp.com",
  projectId: "plantits",
  storageBucket: "plantits.appspot.com",
  messagingSenderId: "855468816987",
  appId: "1:855468816987:web:a58576a285abb5e39cdd7e"
})

export const getFirestore = () => firebase.firestore()