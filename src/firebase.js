import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = { // NOTE: in production enviroment you must use Enviroment Variables for `firebaseConfig` in a `env.local` file
    apiKey: "AIzaSyDQHHDCAoNHUuGTmnzAuaVhI9oNJ5KDxd4",
    authDomain: "cryptocurrence-wallet.firebaseapp.com",
    projectId: "cryptocurrence-wallet",
    storageBucket: "cryptocurrence-wallet.appspot.com",
    messagingSenderId: "938309314998",
    appId: "1:938309314998:web:76f09e825b4ad14d06b917",
    measurementId: "G-C5JC0309X9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = app.auth()
export default app