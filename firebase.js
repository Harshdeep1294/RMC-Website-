import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    // apiKey: "YOUR_FIREBASE_API_KEY_HERE",    <- enter your API key 
    authDomain: "rmcproject-3d01d.firebaseapp.com",
    projectId: "rmcproject-3d01d",
    storageBucket: "rmcproject-3d01d.appspot.com",
    messagingSenderId: "887355696530",
    appId: "1:887355696530:web:2e9549a5eda74871ef4d4b",
    measurementId: "G-NLWQFM6V42"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
