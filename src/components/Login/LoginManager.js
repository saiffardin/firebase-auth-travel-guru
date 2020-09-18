// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// firebase config
import { firebaseConfig } from "../../firebaseConfig";


// firebase initialize
export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}


export const signInWithEmailAndPassword = (user,history,from) => {

    let email = user.email;
    let password = user.password;

    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            console.log("successful : in login manager");
            // console.log(res.user);

            const newUserInfo = {
                uid: res.user.uid,
                email: res.user.email,
                displayName: res.user.displayName,
                isSignedIn: true,
            };

            console.log(newUserInfo);
            history.replace(from);
            return newUserInfo;
        })
        .catch((err) => {
            let errorCode = err.code;
            let errorMessage = err.message;

            console.log("Log In Failed. Look at the Errors");
            console.log("errorCode: ", errorCode);
            console.log("errorMessage: ", errorMessage);

            if (err.code === 'auth/user-not-found') {
                return -1;
            }


            if (err.code === 'auth/wrong-password') {
                return -2;
            }
        })
}

