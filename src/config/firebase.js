import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBdOgwSpv0zCsiCcucVjErQIBOIu8hZ4HE",
  authDomain: "micomidafavorita-dcfcf.firebaseapp.com",
  projectId: "micomidafavorita-dcfcf",
  storageBucket: "micomidafavorita-dcfcf.firebasestorage.app",
  messagingSenderId: "637875516633",
  appId: "1:637875516633:web:46f7ffc7e6c238a49fbac8",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);