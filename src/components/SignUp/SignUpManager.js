// // Firebase App (the core Firebase SDK) is always required and must be listed first
// import * as firebase from "firebase/app";

// // Add the Firebase products that you want to use
// import "firebase/auth";
// import firebaseConfig from '../../firebase.config';
// import "firebase/firestore";




// export const initializeLoginFramework = () => {

//     if (firebase.apps.length === 0) {
//         firebase.initializeApp(firebaseConfig);
//     }
// }



// export const handleFirebase = () =>{
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((res) => {

//         console.log(res);

//         return db.collection('users').doc(res.user.uid).set({
//             email: newUser.email,
//             password: newUser.password,
//             firstName: newUser.firstName,
//             lastName: newUser.lastName,
//             courses : [],
//         });


//     })
//     .then(() => {
//         console.log("account created successfully.");
//         newUser.isSignedIn = true;
//         setLoggedInUser(newUser);
//         localStorage.setItem('user', JSON.stringify(newUser))
//         history.push("/profile");
//     })
//     .catch((err) => {
//         let errorCode = err.code;
//         let errorMessage = err.message;

//         console.log("Sign Up Failed. Look at the Errors");
//         console.log("errorCode: ", errorCode);
//         console.log("errorMessage: ", errorMessage);

//         if (errorCode === 'auth/email-already-in-use') {
//             alert("Account already in use");
//         }

//     })

// }