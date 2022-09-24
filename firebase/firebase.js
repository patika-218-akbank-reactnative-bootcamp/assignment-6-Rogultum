import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAwn7Rpg-G-bki4KAv3XhDlakRzwcjyFCw',
  authDomain: 'snapchatmock.firebaseapp.com',
  projectId: 'snapchatmock',
  storageBucket: 'snapchatmock.appspot.com',
  messagingSenderId: '1027631501315',
  appId: '1:1027631501315:web:40dc4200ad66f332e5be36',
  measurementId: 'G-SKPF89XM5X',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
