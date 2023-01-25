import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBRFUzniZ6PhacCqD4pwB5iyIXef3DJqQw",
  authDomain: "miniblog-1af51.firebaseapp.com",
  projectId: "miniblog-1af51",
  storageBucket: "miniblog-1af51.appspot.com",
  messagingSenderId: "608263310227",
  appId: "1:608263310227:web:8a5e55bd5f1857ec1df666"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }