// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


// firebase config
import { firebaseConfig } from "../../firebaseConfig";


// firebase initialize
export const initializeSignUpFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}



export const handleFirebase = (user, setLoggedInUser, history) => {

    let email = user.email;
    let password = user.password;

    let displayName = user.displayName;


    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(res);

            res.user.updateProfile({
                displayName: displayName,
            })

        })
        .then(() => {
            console.log("account created successfully : inside signup manager.");
            user.isSignedIn = true;
            setLoggedInUser(user);
            history.push("/afterLogin");
        })
        .catch((err) => {
            let errorCode = err.code;
            let errorMessage = err.message;

            console.log("Sign Up Failed. Look at the Errors");
            console.log("errorCode: ", errorCode);
            console.log("errorMessage: ", errorMessage);

            if (errorCode === 'auth/email-already-in-use') {
                alert("Account already in use");
            }

        })

}