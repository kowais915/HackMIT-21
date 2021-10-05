console.log('hello')
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";

const button = document.querySelector('button');

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAsQJTJpdXL_eqr3nznTxW71MucVMYGKjA",
    authDomain: "trash-it-90369.firebaseapp.com",
    projectId: "trash-it-90369",
    storageBucket: "trash-it-90369.appspot.com",
    messagingSenderId: "131749502113",
    appId: "1:131749502113:web:943a3629dfc1fe07bea4e0",
    measurementId: "G-3ZNZ0TD2BW"
  });


const provider = new GoogleAuthProvider();



// This snippet is added from the firebase docs
button.addEventListener('click', (e)=>{
    const auth = getAuth();
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });



})

