// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqjLnhVkb_u_5Lg6k25CKGGnymBF-8GoU",
  authDomain: "blog-app-a96b5.firebaseapp.com",
  projectId: "blog-app-a96b5",
  storageBucket: "blog-app-a96b5.appspot.com",
  messagingSenderId: "784555672312",
  appId: "1:784555672312:web:27dfddf2c3f9378d93f10d",
  measurementId: "G-K5BMW7XSWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
//Export the reference to be used in other files
export const db = getFirestore(app);

/**const firebaseConfig = {
  apiKey: "*********************************",
  authDomain: "*******************************",
  projectId: "***********************",
  storageBucket: "******************************",
  messagingSenderId: "******************",
  appId: "************************"
}; */