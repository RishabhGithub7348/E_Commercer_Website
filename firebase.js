
import firebase from 'firebase';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlmTL8wzvI1mOqSHFiy23m5UuG14KBJ9k",
  authDomain: "fir-bea77.firebaseapp.com",
  projectId: "fir-bea77",
  storageBucket: "fir-bea77.appspot.com",
  messagingSenderId: "681072962905",
  appId: "1:681072962905:web:2bb45e14c6621ec1bab048"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore()

export default db