// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9C4BCKnDw6b04dLN25JpVlZ80a9WMX8Y",
  authDomain: "imageuploadkmv.firebaseapp.com",
  projectId: "imageuploadkmv",
  storageBucket: "imageuploadkmv.appspot.com",
  messagingSenderId: "598730551521",
  appId: "1:598730551521:web:0a6c170fb955f107ac47a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const imageDB = getStorage(app)