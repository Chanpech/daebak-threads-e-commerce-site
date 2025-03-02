//Firebase SDKs
import { initializeApp, getApp, getApps } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD69jYi6jI-jqT-P5X6RqJ3QB1w7QnJ1Lk",
  authDomain: "ecommerce-daebakthreads.firebaseapp.com",
  projectId: "ecommerce-daebakthreads",
  storageBucket: "ecommerce-daebakthreads.firebasestorage.app",
  messagingSenderId: "182604524685",
  appId: "1:182604524685:web:8067c4e07f8ebc24b946c4",
  measurementId: "G-GJ97RRTD3V"
};


// Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const auth = getAuth(app);
// const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

//Detect Auth State
onAuthStateChanged(auth, user => {
  if(user != null){
    console.log('logged in');
  } else {
    console.log('no user')
  }
})

export { auth };

  
