// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6-REmCvEPW3LjHjOgpwSJ4Q7t_F4OpPQ",
  authDomain: "react-native-7f905.firebaseapp.com",
  databaseURL: "https://react-native-7f905-default-rtdb.firebaseio.com",
  projectId: "react-native-7f905",
  storageBucket: "react-native-7f905.appspot.com",
  messagingSenderId: "441002244144",
  appId: "1:441002244144:web:79f25e221dc6e2c62895f5",
  measurementId: "G-51M44L2L4J",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
// Initialize Firebase
const auth = firebase.auth();

export { auth };
