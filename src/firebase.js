import {initializeApp} from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAULJO8p5Q40MaZG1Lu1vuui_jE1QCrIbc",
    authDomain: "disneyplus-clone-48c3b.firebaseapp.com",
    projectId: "disneyplus-clone-48c3b",
    storageBucket: "disneyplus-clone-48c3b.appspot.com",
    messagingSenderId: "1099464428298",
    appId: "1:1099464428298:web:9a1da452ef8fc71db948f3",
    measurementId: "G-0L162CQ3S0"
  };

  const app = initializeApp(firebaseConfig);
//   const db = getFirestore(app);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
//   const storage = firebase.storage();

//   const signInWithGoogle = () =>{
//     signInWithPopup(auth,provider);
//   }



  export {auth, provider/*, storage*/};
//   export default db;