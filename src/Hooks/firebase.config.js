// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJy1XlcbTQ0skXND_s28ViECdSClBsBS4",
  authDomain: "online-marketplace-1c947.firebaseapp.com",
  projectId: "online-marketplace-1c947",
  storageBucket: "online-marketplace-1c947.appspot.com",
  messagingSenderId: "647732230966",
  appId: "1:647732230966:web:44e7760d117bb2e7db9197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;