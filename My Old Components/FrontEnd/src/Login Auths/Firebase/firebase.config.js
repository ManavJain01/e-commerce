// Firebase Otp Auth. Components

// npm install firebase
// npm i dotenv

// Accessing Conf File
import Conf from '../../Conf/Conf'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Conf.api_Key,
  authDomain: Conf.auth_Domain,
  projectId: Conf.project_Id,
  storageBucket: Conf.storage_Bucket,
  messagingSenderId: Conf.messaging_Sender_Id,
  appId: Conf.app_Id,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)