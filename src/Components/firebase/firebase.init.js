// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdWYhSA4tfkxkOUpcGjpgjxL2AV5DM4Ak",
  authDomain: "code-academy-7c314.firebaseapp.com",
  projectId: "code-academy-7c314",
  storageBucket: "code-academy-7c314.appspot.com",
  messagingSenderId: "272970407201",
  appId: "1:272970407201:web:9f205cf644c93d2ff63260"
  // apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;