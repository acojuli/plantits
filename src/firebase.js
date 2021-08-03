// Import the services of Firebase
import firebase from "firebase/app";
import "firebase/firestore";

// Define and create the conection with Firebase
const app = firebase.initializeApp({
  // Las api key tenemos que ocultarlas al ponerlo en producción o subir a GitHub
  apiKey: "AIzaSyC4rGJiOU881dZfYiBzvRvyIgoe_FiMqgU",
  authDomain: "plantits.firebaseapp.com",
  projectId: "plantits",
  storageBucket: "plantits.appspot.com",
  messagingSenderId: "855468816987",
  appId: "1:855468816987:web:a58576a285abb5e39cdd7e"
});

export const getFirebase = () => {
  return app;
}
// Create the conection with the service of Firestore
// Where we save our products
export const getFirestore = () => {
  return firebase.firestore(app);
}