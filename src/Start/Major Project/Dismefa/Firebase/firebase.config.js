// npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: api_Key,
  authDomain: auth_Domain,
  projectId: project_Id,
  storageBucket: storage_Bucket,
  messagingSenderId: messaging_Sender_Id,
  appId: app_Id,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)