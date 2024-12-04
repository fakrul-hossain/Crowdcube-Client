// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.storageBucket,
  messagingSenderId:
  import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default(auth)





// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCwh3f0X-yUQIjmAa3byqV8Pgd0uA62hcQ",
//   authDomain: "clothing-donation-afada.firebaseapp.com",
//   projectId: "clothing-donation-afada",
//   storageBucket: "clothing-donation-afada.firebasestorage.app",
//   messagingSenderId: "653610391624",
//   appId: "1:653610391624:web:17d3c0540585fb0829e07d"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);