import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAHw30RJraSlmCEQ6mSSZ5cCpSwVCwZXgg",
  authDomain: "druggedapp.firebaseapp.com",
  projectId: "druggedapp",
  storageBucket: "druggedapp.firebasestorage.app",
  messagingSenderId: "894106554308",
  appId: "1:894106554308:web:93d2393076562e6f019e91"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
