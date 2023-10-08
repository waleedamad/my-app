
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBCiVVaFmCs6TZHEwGKCSLpDswmBpyph18",
  authDomain: "hackathone-12b8f.firebaseapp.com",
  projectId: "hackathone-12b8f",
  storageBucket: "hackathone-12b8f.appspot.com",
  messagingSenderId: "1081406065411",
  appId: "1:1081406065411:web:23033b736b11f6b1a87736"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);