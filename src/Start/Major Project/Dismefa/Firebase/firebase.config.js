// npm install firebase
// npm i dotenv

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_api_Key,
  authDomain: import.meta.env.VITE_REACT_APP_auth_Domain,
  projectId: import.meta.env.VITE_REACT_APP_project_Id,
  storageBucket: import.meta.env.VITE_REACT_APP_storage_Bucket,
  messagingSenderId: import.meta.env.VITE_REACT_APP_messaging_Sender_Id,
  appId: import.meta.env.VITE_REACT_APP_app_Id,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)